import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { resend } from '@/lib/resend';
import { signupFormSchema } from '@/lib/validations/signup';
import {
  getSignupWelcomeEmailHtml,
  getNewSignupNotificationEmailHtml,
} from '@/lib/email-templates';

// Create Supabase client lazily for server-side operations
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = signupFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;
    const fullName = body.fullName?.trim() || undefined;
    const normalizedEmail = email.toLowerCase();

    // Create user via Supabase Auth
    const supabase = getSupabase();
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (authError) {
      console.error('Supabase auth error:', authError);

      if (authError.message.includes('already registered') || authError.message.includes('already been registered')) {
        return NextResponse.json(
          {
            success: false,
            error: 'This email is already registered. Please log in instead.',
            code: 'DUPLICATE_EMAIL',
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { success: false, error: 'Failed to create account. Please try again.' },
        { status: 500 }
      );
    }

    // Detect duplicate email: anon key returns fake user with empty identities
    if (
      authData?.user &&
      (!authData.user.identities || authData.user.identities.length === 0)
    ) {
      return NextResponse.json(
        {
          success: false,
          error: 'This email is already registered. Please log in instead.',
          code: 'DUPLICATE_EMAIL',
        },
        { status: 409 }
      );
    }

    // Sign out immediately since new users can't access dashboard
    await supabase.auth.signOut();

    // Send welcome email to user
    try {
      const { error: welcomeEmailError } = await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: normalizedEmail,
        subject: "Welcome to MillionVPN! 🎉 Your Account is Ready",
        html: getSignupWelcomeEmailHtml({ name: fullName }),
      });

      if (welcomeEmailError) {
        console.error('Welcome email error:', welcomeEmailError);
      } else {
        console.log('Welcome email sent to:', normalizedEmail);
      }
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
    }

    // Send notification email to admin/contact emails
    try {
      const contactEmails = process.env.CONTACT_EMAILS?.split(',').map((e) => e.trim()) || [];

      if (contactEmails.length > 0) {
        const notificationHtml = getNewSignupNotificationEmailHtml({
          email: normalizedEmail,
          name: fullName,
        });

        const { error: notificationError } = await resend.batch.send(
          contactEmails.map((recipientEmail) => ({
            from: process.env.EMAIL_FROM!,
            to: recipientEmail,
            subject: `[MillionVPN] New User Signup: ${normalizedEmail}`,
            html: notificationHtml,
          }))
        );

        if (notificationError) {
          console.error('Notification email error:', notificationError);
        } else {
          console.log('Notification emails sent to:', contactEmails);
        }
      }
    } catch (emailError) {
      console.error('Failed to send notification emails:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Account created successfully!',
      data: {
        email: normalizedEmail,
      },
    });
  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
