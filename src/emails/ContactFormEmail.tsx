import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  subject,
  message,
}: ContactFormEmailProps) {
  const previewText = `New contact form submission from ${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logoText}>MillionVPN</Heading>
            <Text style={headerSubtitle}>Contact Form Submission</Text>
          </Section>

          {/* Main content */}
          <Section style={content}>
            <Heading style={heading}>New Message Received</Heading>

            {/* Contact Details */}
            <Section style={detailsSection}>
              <div style={detailRow}>
                <Text style={detailLabel}>From:</Text>
                <Text style={detailValue}>{firstName} {lastName}</Text>
              </div>
              <div style={detailRow}>
                <Text style={detailLabel}>Email:</Text>
                <Text style={detailValueEmail}>{email}</Text>
              </div>
              <div style={detailRow}>
                <Text style={detailLabel}>Subject:</Text>
                <Text style={detailValue}>{subject}</Text>
              </div>
            </Section>

            <Hr style={hr} />

            {/* Message */}
            <Section style={messageSection}>
              <Text style={messageLabel}>Message:</Text>
              <div style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </div>
            </Section>

            {/* Reply CTA */}
            <Section style={ctaSection}>
              <Text style={ctaText}>
                Reply directly to this email to respond to {firstName}.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the MillionVPN contact form.
            </Text>
            <Text style={footerTimestamp}>
              Received at: {new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  borderRadius: '12px',
  overflow: 'hidden' as const,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
};

const header = {
  background: 'linear-gradient(135deg, #5B3FD9 0%, #7C5CFF 100%)',
  padding: '32px 20px',
  textAlign: 'center' as const,
};

const logoText = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 8px',
  letterSpacing: '-0.5px',
};

const headerSubtitle = {
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const content = {
  padding: '32px 40px',
};

const heading = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '0 0 24px',
};

const detailsSection = {
  backgroundColor: '#f8fafc',
  borderRadius: '12px',
  padding: '20px 24px',
  marginBottom: '24px',
};

const detailRow = {
  display: 'flex',
  marginBottom: '12px',
};

const detailLabel = {
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  minWidth: '80px',
};

const detailValue = {
  color: '#1e293b',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const detailValueEmail = {
  color: '#5B3FD9',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '0 0 24px',
};

const messageSection = {
  marginBottom: '24px',
};

const messageLabel = {
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const messageBox = {
  backgroundColor: '#fafafa',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '16px 20px',
};

const messageText = {
  color: '#334155',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const ctaSection = {
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  padding: '16px 20px',
  borderLeft: '4px solid #10B981',
};

const ctaText = {
  color: '#166534',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const footer = {
  backgroundColor: '#f8fafc',
  padding: '20px 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#94a3b8',
  fontSize: '12px',
  margin: '0 0 4px',
};

const footerTimestamp = {
  color: '#cbd5e1',
  fontSize: '11px',
  margin: '0',
};
