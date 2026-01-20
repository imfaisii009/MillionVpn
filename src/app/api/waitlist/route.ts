import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
import { waitlistSchema } from '@/lib/validations/waitlist';
import { getWaitlistWelcomeEmailHtml } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = waitlistSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const { email, name } = validationResult.data;
    const normalizedEmail = email.toLowerCase();

    // Insert new entry (duplicate check handled by unique constraint)
    const { error } = await supabase
      .from('waitlist')
      .insert({
        email: normalizedEmail,
        name,
        source: 'hero',
        status: 'pending',
      });

    if (error) {
      console.error('Supabase error:', error);

      // Handle unique constraint violation
      if (error.code === '23505') {
        return NextResponse.json(
          {
            success: false,
            error: 'This email is already on our waiting list!',
            code: 'DUPLICATE_EMAIL',
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { success: false, error: 'Failed to join waiting list. Please try again.' },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: normalizedEmail,
        subject: "You're on the MillionVPN Waitlist! 🎉 Your 30% Discount Awaits",
        html: getWaitlistWelcomeEmailHtml({ name }),
      });

      if (emailError) {
        console.error('Resend API error:', emailError);
      } else {
        console.log('Welcome email sent:', emailData);
      }
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error('Failed to send welcome email:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waiting list!',
      data: {
        email: normalizedEmail,
      },
    });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
