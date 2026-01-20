export function getContactFormEmailHtml({
  firstName,
  lastName,
  email,
  subject,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f9fc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #5B3FD9 0%, #7C5CFF 100%); padding: 32px 20px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 8px; letter-spacing: -0.5px;">MillionVPN</h1>
              <p style="color: rgba(255, 255, 255, 0.85); font-size: 14px; margin: 0; font-weight: 500;">Contact Form Submission</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="color: #1a1a1a; font-size: 24px; font-weight: 700; text-align: center; margin: 0 0 24px;">New Message Received</h2>

              <!-- Contact Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="color: #64748b; font-size: 14px; font-weight: 600; display: inline-block; width: 80px;">From:</span>
                    <span style="color: #1e293b; font-size: 14px; font-weight: 500;">${firstName} ${lastName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="color: #64748b; font-size: 14px; font-weight: 600; display: inline-block; width: 80px;">Email:</span>
                    <span style="color: #5B3FD9; font-size: 14px; font-weight: 500;">${email}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="color: #64748b; font-size: 14px; font-weight: 600; display: inline-block; width: 80px;">Subject:</span>
                    <span style="color: #1e293b; font-size: 14px; font-weight: 500;">${subject}</span>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 0 0 24px;">

              <!-- Message -->
              <p style="color: #64748b; font-size: 14px; font-weight: 600; margin: 0 0 12px;">Message:</p>
              <div style="background-color: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px;">
                <p style="color: #334155; font-size: 15px; line-height: 24px; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <div style="background-color: #f0fdf4; border-radius: 8px; padding: 16px 20px; border-left: 4px solid #10B981; margin-top: 24px;">
                <p style="color: #166534; font-size: 14px; margin: 0; font-weight: 500;">Reply directly to this email to respond to ${firstName}.</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 40px; text-align: center;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0 0 4px;">This email was sent from the MillionVPN contact form.</p>
              <p style="color: #cbd5e1; font-size: 11px; margin: 0;">Received at: ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function getWaitlistWelcomeEmailHtml({ name }: { name?: string }) {
  const greeting = name ? `Welcome, ${name}!` : 'Welcome!';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f9fc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #5B3FD9 0%, #7C5CFF 100%); padding: 40px 20px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">MillionVPN</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 40px 20px;">
              <!-- Success Icon -->
              <div style="text-align: center; margin-bottom: 24px;">
                <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background-color: #10B981; color: #ffffff; font-size: 32px; line-height: 64px; text-align: center;">✓</div>
              </div>

              <h2 style="color: #1a1a1a; font-size: 28px; font-weight: 700; text-align: center; margin: 0 0 8px;">${greeting}</h2>
              <p style="color: #5B3FD9; font-size: 18px; font-weight: 600; text-align: center; margin: 0 0 24px;">You're on the list!</p>

              <p style="color: #4a5568; font-size: 16px; line-height: 26px; margin: 0 0 20px;">
                Thank you for joining the MillionVPN waitlist. You're now among the first to know when we launch, and you've secured your exclusive early-bird discount.
              </p>

              <!-- Discount Badge -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background: linear-gradient(135deg, #5B3FD9 0%, #7C5CFF 100%); border-radius: 16px; padding: 24px 40px; text-align: center;">
                      <p style="color: rgba(255, 255, 255, 0.8); font-size: 12px; font-weight: 600; letter-spacing: 1px; margin: 0 0 8px;">YOUR EXCLUSIVE DISCOUNT</p>
                      <p style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 8px; letter-spacing: -1px;">30% OFF</p>
                      <p style="color: rgba(255, 255, 255, 0.9); font-size: 14px; margin: 0;">Applied automatically at launch</p>
                    </div>
                  </td>
                </tr>
              </table>

              <p style="color: #4a5568; font-size: 16px; line-height: 26px; margin: 0 0 20px;">
                As an early supporter, you'll get access to:
              </p>

              <!-- Benefits List -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="font-size: 20px; margin-right: 12px;">🚀</span>
                    <span style="color: #4a5568; font-size: 15px;">Early access before public launch</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="font-size: 20px; margin-right: 12px;">💰</span>
                    <span style="color: #4a5568; font-size: 15px;">Lifetime 30% discount on all plans</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="font-size: 20px; margin-right: 12px;">🎁</span>
                    <span style="color: #4a5568; font-size: 15px;">Exclusive features and priority support</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="font-size: 20px; margin-right: 12px;">🔒</span>
                    <span style="color: #4a5568; font-size: 15px;">Military-grade encryption & no-logs policy</span>
                  </td>
                </tr>
              </table>

              <p style="color: #4a5568; font-size: 16px; line-height: 26px; margin: 0 0 20px;">
                We're working hard to bring you the fastest, most secure VPN experience. Stay tuned for updates!
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                <tr>
                  <td align="center">
                    <a href="https://millionvpn.com" style="display: inline-block; background-color: #5B3FD9; border-radius: 8px; color: #ffffff; font-size: 16px; font-weight: 600; padding: 14px 32px; text-decoration: none; text-align: center;">Learn More About MillionVPN</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top: 1px solid #e6ebf1; padding: 20px 40px 40px; text-align: center;">
              <p style="color: #8898aa; font-size: 13px; line-height: 20px; margin: 0 0 12px;">
                You received this email because you signed up for the MillionVPN waitlist.
              </p>
              <p style="color: #8898aa; font-size: 13px; margin: 0 0 12px;">
                <a href="https://millionvpn.com/privacy" style="color: #5B3FD9; text-decoration: none;">Privacy Policy</a>
                &nbsp;•&nbsp;
                <a href="https://millionvpn.com/terms" style="color: #5B3FD9; text-decoration: none;">Terms of Service</a>
              </p>
              <p style="color: #aab7c4; font-size: 12px; margin: 0;">
                © 2025 MillionVPN. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
