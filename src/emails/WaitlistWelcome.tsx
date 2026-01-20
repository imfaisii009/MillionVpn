import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface WaitlistWelcomeEmailProps {
  name?: string;
}

export default function WaitlistWelcomeEmail({ name }: WaitlistWelcomeEmailProps) {
  const previewText = "You're on the MillionVPN waitlist! Get ready for 30% off at launch.";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with gradient background */}
          <Section style={header}>
            <Heading style={logoText}>MillionVPN</Heading>
          </Section>

          {/* Main content */}
          <Section style={content}>
            {/* Success icon */}
            <div style={iconContainer}>
              <div style={checkIcon}>✓</div>
            </div>

            <Heading style={heading}>
              {name ? `Welcome, ${name}!` : 'Welcome!'}
            </Heading>

            <Text style={subheading}>You&apos;re on the list!</Text>

            <Text style={paragraph}>
              Thank you for joining the MillionVPN waitlist. You&apos;re now among the first to
              know when we launch, and you&apos;ve secured your exclusive early-bird discount.
            </Text>

            {/* Discount badge */}
            <Section style={discountSection}>
              <div style={discountBadge}>
                <Text style={discountLabel}>YOUR EXCLUSIVE DISCOUNT</Text>
                <Text style={discountValue}>30% OFF</Text>
                <Text style={discountNote}>Applied automatically at launch</Text>
              </div>
            </Section>

            <Text style={paragraph}>
              As an early supporter, you&apos;ll get access to:
            </Text>

            {/* Benefits list */}
            <Section style={benefitsList}>
              <div style={benefitItem}>
                <span style={benefitIcon}>🚀</span>
                <Text style={benefitText}>Early access before public launch</Text>
              </div>
              <div style={benefitItem}>
                <span style={benefitIcon}>💰</span>
                <Text style={benefitText}>Lifetime 30% discount on all plans</Text>
              </div>
              <div style={benefitItem}>
                <span style={benefitIcon}>🎁</span>
                <Text style={benefitText}>Exclusive features and priority support</Text>
              </div>
              <div style={benefitItem}>
                <span style={benefitIcon}>🔒</span>
                <Text style={benefitText}>Military-grade encryption & no-logs policy</Text>
              </div>
            </Section>

            <Text style={paragraph}>
              We&apos;re working hard to bring you the fastest, most secure VPN experience.
              Stay tuned for updates!
            </Text>

            {/* CTA Button */}
            <Section style={buttonSection}>
              <Link href="https://millionvpn.com" style={button}>
                Learn More About MillionVPN
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              You received this email because you signed up for the MillionVPN waitlist.
            </Text>
            <Text style={footerLinks}>
              <Link href="https://millionvpn.com/privacy" style={footerLink}>
                Privacy Policy
              </Link>
              {' • '}
              <Link href="https://millionvpn.com/terms" style={footerLink}>
                Terms of Service
              </Link>
            </Text>
            <Text style={footerCopyright}>
              © 2025 MillionVPN. All rights reserved.
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
  padding: '40px 20px',
  textAlign: 'center' as const,
};

const logoText = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0',
  letterSpacing: '-0.5px',
};

const content = {
  padding: '40px 40px 20px',
};

const iconContainer = {
  textAlign: 'center' as const,
  marginBottom: '24px',
};

const checkIcon = {
  display: 'inline-block',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: '#10B981',
  color: '#ffffff',
  fontSize: '32px',
  lineHeight: '64px',
  textAlign: 'center' as const,
};

const heading = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '0 0 8px',
};

const subheading = {
  color: '#5B3FD9',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0 0 24px',
};

const paragraph = {
  color: '#4a5568',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
};

const discountSection = {
  margin: '32px 0',
  textAlign: 'center' as const,
};

const discountBadge = {
  display: 'inline-block',
  background: 'linear-gradient(135deg, #5B3FD9 0%, #7C5CFF 100%)',
  borderRadius: '16px',
  padding: '24px 40px',
  textAlign: 'center' as const,
};

const discountLabel = {
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '1px',
  margin: '0 0 8px',
};

const discountValue = {
  color: '#ffffff',
  fontSize: '42px',
  fontWeight: '800',
  margin: '0 0 8px',
  letterSpacing: '-1px',
};

const discountNote = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '14px',
  margin: '0',
};

const benefitsList = {
  margin: '24px 0',
  padding: '0',
};

const benefitItem = {
  display: 'flex',
  alignItems: 'center' as const,
  marginBottom: '16px',
};

const benefitIcon = {
  fontSize: '20px',
  marginRight: '12px',
  width: '28px',
};

const benefitText = {
  color: '#4a5568',
  fontSize: '15px',
  margin: '0',
  lineHeight: '1.5',
};

const buttonSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#5B3FD9',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  padding: '14px 32px',
  textDecoration: 'none',
  textAlign: 'center' as const,
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  padding: '20px 40px 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#8898aa',
  fontSize: '13px',
  lineHeight: '20px',
  margin: '0 0 12px',
};

const footerLinks = {
  color: '#8898aa',
  fontSize: '13px',
  margin: '0 0 12px',
};

const footerLink = {
  color: '#5B3FD9',
  textDecoration: 'none',
};

const footerCopyright = {
  color: '#aab7c4',
  fontSize: '12px',
  margin: '0',
};
