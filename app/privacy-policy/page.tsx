import Link from 'next/link'
import { Shield } from 'lucide-react'

const LAST_UPDATED = 'June 1, 2026'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden border-b border-surface-border bg-surface/30">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20">
              <Shield size={18} className="text-accent-green" />
            </span>
            <span className="text-accent-green text-sm font-medium uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary mb-3">
            Privacy Policy
          </h1>
          <p className="text-txt-secondary text-sm">
            Last updated: <span className="text-txt-primary font-medium">{LAST_UPDATED}</span>
          </p>
          <p className="text-txt-secondary text-sm mt-2">
            This policy applies to{' '}
            <span className="text-accent-green font-medium">TheRealSkill.com</span>, a brand of
            Harviera IT Solutions LLP, Hyderabad, Telangana, India.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-legal space-y-12">

          {/* 1 */}
          <Section number="1" title="Introduction & Overview">
            <p>
              TheRealSkill (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
              protecting your personal information. This Privacy Policy explains what data we collect,
              why we collect it, how we use it, and your rights regarding it.
            </p>
            <p>
              By accessing or using our website at{' '}
              <span className="text-accent-green">therealskill.com</span> or contacting us via
              WhatsApp, email, or any other channel, you acknowledge and agree to the practices
              described in this policy.
            </p>
            <p>
              We operate under the applicable data protection laws of India, including the Information
              Technology Act, 2000, and the Digital Personal Data Protection Act, 2023 (DPDPA).
            </p>
          </Section>

          {/* 2 */}
          <Section number="2" title="Information We Collect">
            <p>We collect the following categories of personal data:</p>
            <SubHeading>2.1 Information You Provide Directly</SubHeading>
            <ul>
              <li><strong>Identity data:</strong> Full name, college/institution name, year of study, branch/department</li>
              <li><strong>Contact data:</strong> Email address, WhatsApp/mobile number</li>
              <li><strong>Academic data:</strong> Project requirements, technology preferences, college guidelines you share with us</li>
              <li><strong>Payment data:</strong> Transaction reference numbers, payment confirmations (we do not store full card numbers or UPI credentials — these are handled by Razorpay)</li>
              <li><strong>Communication data:</strong> Messages you send us via WhatsApp, email, or our contact form</li>
            </ul>
            <SubHeading>2.2 Information Collected Automatically</SubHeading>
            <ul>
              <li><strong>Usage data:</strong> Pages visited, time spent, referring URL, browser type, device type</li>
              <li><strong>Technical data:</strong> IP address, operating system, screen resolution</li>
              <li><strong>Cookie data:</strong> Session preferences, consent choices (see Section 4)</li>
            </ul>
            <SubHeading>2.3 Information from Third Parties</SubHeading>
            <p>
              If you interact with us through WhatsApp Business, we may receive your WhatsApp display
              name and phone number. We do not purchase or source personal data from data brokers.
            </p>
          </Section>

          {/* 3 */}
          <Section number="3" title="How We Use Your Information">
            <p>We use the personal data we collect for the following purposes:</p>
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Lawful Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Delivering projects, courses, and services you purchase</td>
                  <td>Contract performance</td>
                </tr>
                <tr>
                  <td>Processing payments and issuing receipts</td>
                  <td>Contract performance / Legal obligation</td>
                </tr>
                <tr>
                  <td>Responding to enquiries and providing support</td>
                  <td>Legitimate interest</td>
                </tr>
                <tr>
                  <td>Sending order updates and delivery notifications</td>
                  <td>Contract performance</td>
                </tr>
                <tr>
                  <td>Sending offers, newsletters, and promotional content</td>
                  <td>Consent (you may opt out at any time)</td>
                </tr>
                <tr>
                  <td>Improving our website, services, and user experience</td>
                  <td>Legitimate interest</td>
                </tr>
                <tr>
                  <td>Complying with legal and regulatory obligations</td>
                  <td>Legal obligation</td>
                </tr>
                <tr>
                  <td>Fraud detection and platform security</td>
                  <td>Legitimate interest</td>
                </tr>
              </tbody>
            </table>
            <p>
              We will never sell your personal data to third parties for marketing purposes.
            </p>
          </Section>

          {/* 4 */}
          <Section number="4" title="Cookies and Tracking Technologies">
            <p>
              Our website uses the following types of cookies and storage technologies:
            </p>
            <ul>
              <li>
                <strong>Strictly necessary:</strong> Session storage to remember your preferences
                (e.g., dismissing the banner, popup state). Required for the site to function.
              </li>
              <li>
                <strong>Analytics:</strong> We may use Google Analytics to understand how visitors
                use our site (aggregated, anonymised data). You can opt out using browser extensions
                like Google Analytics Opt-out Add-on.
              </li>
              <li>
                <strong>No advertising cookies:</strong> We do not use cookies to track you across
                other websites or serve targeted advertisements.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling cookies may affect
              some site functionality.
            </p>
          </Section>

          {/* 5 */}
          <Section number="5" title="Third-Party Service Providers">
            <p>
              We share your data with the following trusted third parties solely to deliver our
              services:
            </p>
            <ul>
              <li>
                <strong>Razorpay:</strong> Payment processing. Your payment card/UPI details are
                entered directly on Razorpay&apos;s PCI-DSS compliant platform and are never stored
                by us. See{' '}
                <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">
                  Razorpay&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Meta (WhatsApp Business):</strong> For customer support and delivery
                notifications. Subject to Meta&apos;s data policies.
              </li>
              <li>
                <strong>Google (Analytics, Fonts):</strong> We use Google Fonts (loaded via
                next/font for privacy-friendly self-hosting) and may use Google Analytics.
              </li>
              <li>
                <strong>Vercel:</strong> Our website hosting provider. Vercel may log request
                metadata (IP, user agent) for security and performance.
              </li>
            </ul>
            <p>
              All third-party providers are contractually obligated to handle your data securely and
              only for the purposes we specify.
            </p>
          </Section>

          {/* 6 */}
          <Section number="6" title="Data Security">
            <p>
              We implement industry-standard technical and organisational measures to protect your
              personal data from unauthorised access, alteration, disclosure, or destruction:
            </p>
            <ul>
              <li>HTTPS encryption for all data in transit</li>
              <li>Access controls limiting staff access to data on a need-to-know basis</li>
              <li>Secure, encrypted communication channels for project delivery</li>
              <li>Regular review of our data handling practices</li>
            </ul>
            <p>
              No method of transmission over the internet is 100% secure. While we take all
              reasonable precautions, we cannot guarantee absolute security of your data.
            </p>
          </Section>

          {/* 7 */}
          <Section number="7" title="Data Retention">
            <p>We retain your personal data for as long as:</p>
            <ul>
              <li>
                <strong>Active customers:</strong> For the duration of our service relationship plus
                3 years for accounting and legal compliance.
              </li>
              <li>
                <strong>Enquiries (no purchase):</strong> Up to 1 year from last contact, then
                deleted unless you have consented to marketing communications.
              </li>
              <li>
                <strong>Marketing consent:</strong> Until you withdraw consent.
              </li>
              <li>
                <strong>Legal obligations:</strong> Where required by Indian tax law or other
                applicable regulation, we may retain records for up to 7 years.
              </li>
            </ul>
          </Section>

          {/* 8 */}
          <Section number="8" title="Your Rights">
            <p>
              Under the Digital Personal Data Protection Act, 2023 (India) and applicable law, you
              have the following rights:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal retention obligations).</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications at any time.</li>
              <li><strong>Right to Grievance Redressal:</strong> File a complaint with our Grievance Officer (see Section 11).</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a href="mailto:hello@therealskill.com">hello@therealskill.com</a> or message us on
              WhatsApp at +91-9959-691-347. We will respond within 30 days.
            </p>
          </Section>

          {/* 9 */}
          <Section number="9" title="Children's Privacy">
            <p>
              Our services are intended for students aged 18 and above (or those enrolled in
              B.Tech / M.Tech programmes, which typically require the student to be 17+). We do
              not knowingly collect personal data from children under 13.
            </p>
            <p>
              If you believe a minor has submitted personal data to us, please contact us at{' '}
              <a href="mailto:hello@therealskill.com">hello@therealskill.com</a> and we will
              promptly delete it.
            </p>
          </Section>

          {/* 10 */}
          <Section number="10" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable law. When we make material changes, we will:
            </p>
            <ul>
              <li>Update the &ldquo;Last Updated&rdquo; date at the top of this page</li>
              <li>Notify active customers via email or WhatsApp where required</li>
            </ul>
            <p>
              Your continued use of our services after any update constitutes acceptance of the
              revised policy.
            </p>
          </Section>

          {/* 11 */}
          <Section number="11" title="Grievance Officer & Contact Us">
            <p>
              In accordance with the Information Technology Act, 2000, we have appointed a
              Grievance Officer to address any concerns about our data handling practices:
            </p>
            <div className="not-prose mt-4 p-5 rounded-xl bg-surface border border-surface-border">
              <p className="text-txt-primary font-semibold mb-1">Grievance Officer</p>
              <p className="text-txt-secondary text-sm">Harviera IT Solutions LLP</p>
              <p className="text-txt-secondary text-sm">Hyderabad, Telangana, India — 500001</p>
              <a href="mailto:hello@therealskill.com" className="text-accent-green text-sm hover:underline block mt-1">
                hello@therealskill.com
              </a>
              <a
                href="https://wa.me/919959691347"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-green text-sm hover:underline"
              >
                +91-9959-691-347 (WhatsApp)
              </a>
              <p className="text-txt-muted text-xs mt-2">Response time: within 30 days of receipt</p>
            </div>
          </Section>

          {/* Back link */}
          <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-surface-border text-txt-secondary text-sm font-medium hover:text-txt-primary hover:border-accent-green/40 transition-all"
            >
              ← Back to Home
            </Link>
            <Link
              href="/terms-of-service"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-surface-border text-txt-secondary text-sm font-medium hover:text-txt-primary hover:border-accent-green/40 transition-all"
            >
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="font-syne font-bold text-xl text-txt-primary mb-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 text-accent-green font-syne text-sm font-bold shrink-0">
          {number}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-txt-secondary text-sm leading-relaxed pl-11">{children}</div>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-txt-primary font-semibold text-sm mt-4 mb-1">{children}</h3>
  )
}
