import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { contactSchema } from '@/lib/validations/contact';
import { getContactFormEmailHtml } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = validationResult.data;

    // Get recipient emails from environment variable
    const contactEmails = process.env.CONTACT_EMAILS?.split(',').map((e) => e.trim()) || [];

    if (contactEmails.length === 0) {
      console.error('CONTACT_EMAILS environment variable is not set');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Send email to all recipients using batch API
    const emailHtml = getContactFormEmailHtml({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    const { data, error } = await resend.batch.send(
      contactEmails.map((recipientEmail) => ({
        from: process.env.EMAIL_FROM!,
        to: recipientEmail,
        replyTo: email,
        subject: `[Contact Form] ${subject} - from ${firstName} ${lastName}`,
        html: emailHtml,
      }))
    );

    if (error) {
      console.error('Resend batch error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Contact emails sent:', data);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
