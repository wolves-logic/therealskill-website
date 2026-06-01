import Link from 'next/link'
import { FileText } from 'lucide-react'

const LAST_UPDATED = 'June 1, 2026'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden border-b border-surface-border bg-surface/30">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
              <FileText size={18} className="text-accent-blue" />
            </span>
            <span className="text-accent-blue text-sm font-medium uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary mb-3">
            Terms of Service
          </h1>
          <p className="text-txt-secondary text-sm">
            Last updated: <span className="text-txt-primary font-medium">{LAST_UPDATED}</span>
          </p>
          <p className="text-txt-secondary text-sm mt-2">
            These Terms govern your use of{' '}
            <span className="text-accent-green font-medium">TheRealSkill.com</span>, a brand of
            Harviera IT Solutions LLP, Hyderabad, Telangana, India.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-12">

          {/* 1 */}
          <Section number="1" title="Acceptance of Terms">
            <p>
              By accessing or using TheRealSkill.com (&ldquo;Platform&rdquo;, &ldquo;Site&rdquo;,
              &ldquo;Service&rdquo;), placing an order, enrolling in a course, or contacting us
              via any channel, you (&ldquo;User&rdquo;, &ldquo;Student&rdquo;, &ldquo;Customer&rdquo;)
              agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
            </p>
            <p>
              If you do not agree with any part of these Terms, please discontinue use of the
              Platform immediately. These Terms, together with our Privacy Policy, form a legally
              binding agreement between you and Harviera IT Solutions LLP.
            </p>
            <p>
              We reserve the right to update these Terms at any time. Continued use after changes
              are posted constitutes acceptance of the revised Terms.
            </p>
          </Section>

          {/* 2 */}
          <Section number="2" title="Description of Services">
            <p>
              TheRealSkill provides the following educational and technical services to engineering
              students in India:
            </p>
            <ul>
              <li>
                <strong>Final Year Project Marketplace:</strong> Ready-made and custom engineering
                projects in AI/ML, IoT, Web Development, Data Science, and Blockchain — delivered
                with source code, documentation, PPT, and project report.
              </li>
              <li>
                <strong>Recorded Courses:</strong> Self-paced video courses covering programming,
                web development, data science, and DSA topics.
              </li>
              <li>
                <strong>Live Cohort Batches:</strong> Instructor-led training programmes with live
                sessions, assignments, peer learning, and placement support.
              </li>
              <li>
                <strong>Prototype Development:</strong> Custom hardware-software prototype builds
                for research, innovation, and startup purposes.
              </li>
              <li>
                <strong>Placement Preparation:</strong> DSA bootcamps, mock interviews, aptitude
                training, and core computer science subject preparation.
              </li>
            </ul>
            <p>
              We reserve the right to modify, discontinue, or add services at any time with
              reasonable notice.
            </p>
          </Section>

          {/* 3 */}
          <Section number="3" title="User Eligibility">
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 17 years of age</li>
              <li>Be a currently enrolled or recently graduated engineering student, or a professional seeking skill development</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Provide accurate, current, and complete information when interacting with us</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate access for any user who provides false
              information or violates these Terms.
            </p>
          </Section>

          {/* 4 */}
          <Section number="4" title="Payment Terms">
            <SubHeading>4.1 Pricing</SubHeading>
            <p>
              All prices on the Platform are listed in Indian Rupees (INR) inclusive of applicable
              taxes unless stated otherwise. Prices are subject to change without prior notice, but
              changes will not affect orders already placed.
            </p>
            <SubHeading>4.2 Payment Methods</SubHeading>
            <p>
              We accept UPI, debit/credit cards, net banking, and Razorpay EMI (for eligible
              orders above ₹3,000). All payments are processed securely through Razorpay.
            </p>
            <SubHeading>4.3 Order Confirmation</SubHeading>
            <p>
              A purchase is confirmed only upon receipt of successful payment and your confirmation
              message via WhatsApp or email. We will acknowledge your order within 2 business hours.
            </p>
            <SubHeading>4.4 GST</SubHeading>
            <p>
              Applicable Goods and Services Tax (GST) may be charged as per Indian tax regulations.
              A GST invoice will be provided upon request.
            </p>
          </Section>

          {/* 5 */}
          <Section number="5" title="Refund and Revision Policy">
            <SubHeading>5.1 Final Year Projects</SubHeading>
            <p>
              We operate a <strong>revision-based policy</strong> rather than cash refunds for
              projects. If the delivered project does not match the mutually agreed requirements,
              we will revise it at no additional cost. Revision requests must be raised within{' '}
              <strong>7 days</strong> of delivery via WhatsApp.
            </p>
            <p>
              Refunds are considered only in exceptional circumstances — for example, where we are
              unable to deliver the project at all. Any approved refund will be processed within
              7–10 business days.
            </p>
            <SubHeading>5.2 Recorded Courses</SubHeading>
            <p>
              Since course content is delivered digitally and is immediately accessible upon
              payment, <strong>refunds are not available</strong> after content access has been
              granted. We strongly encourage you to read the course description and contact us with
              any questions before purchasing.
            </p>
            <SubHeading>5.3 Live Cohort Batches</SubHeading>
            <p>
              Cohort fees are partially refundable before the batch start date:
            </p>
            <ul>
              <li>Cancellation 7+ days before batch start: 80% refund</li>
              <li>Cancellation 3–6 days before batch start: 50% refund</li>
              <li>Cancellation less than 3 days before or after batch start: No refund</li>
            </ul>
            <SubHeading>5.4 Prototype Development</SubHeading>
            <p>
              Prototype projects are governed by individual project agreements. Payment milestones
              and revision terms are defined in the project scope document agreed before work begins.
            </p>
          </Section>

          {/* 6 */}
          <Section number="6" title="Intellectual Property Rights">
            <SubHeading>6.1 Our Content</SubHeading>
            <p>
              All content on the Platform — including but not limited to website design, logos,
              course videos, course materials, project templates, and documentation — is the
              exclusive intellectual property of Harviera IT Solutions LLP or its licensors.
            </p>
            <SubHeading>6.2 Project Deliverables</SubHeading>
            <p>
              Upon full payment for a final year project or prototype, you receive a{' '}
              <strong>non-exclusive, personal, non-commercial licence</strong> to use the
              deliverables for your academic or personal purposes. You may not:
            </p>
            <ul>
              <li>Resell, sublicense, or redistribute the source code to third parties</li>
              <li>Represent the project as entirely your own original work in any commercial context</li>
              <li>Upload the code to public repositories (GitHub, GitLab, etc.) without removing our branding</li>
            </ul>
            <SubHeading>6.3 Course Content</SubHeading>
            <p>
              Course videos, notes, and materials are for your personal learning only. Recording,
              redistribution, or resale of any course content is strictly prohibited and may result
              in legal action.
            </p>
          </Section>

          {/* 7 */}
          <Section number="7" title="Student Conduct and Academic Integrity">
            <p>
              We are committed to supporting genuine learning. By purchasing a project, you
              acknowledge and agree that:
            </p>
            <ul>
              <li>
                You will use our project deliverables as a <strong>reference and learning aid</strong>,
                and will make reasonable effort to understand the work
              </li>
              <li>
                You are solely responsible for compliance with your institution&apos;s academic
                integrity and anti-plagiarism policies
              </li>
              <li>
                TheRealSkill bears no liability for any academic consequences arising from
                how you use or submit our deliverables
              </li>
              <li>
                We encourage all students to learn from, customise, and genuinely understand
                the projects they receive
              </li>
            </ul>
            <p>
              Users must not engage in: harassment of our staff, fraudulent chargebacks, abuse of
              the revision policy, or use of our platform for any unlawful purpose.
            </p>
          </Section>

          {/* 8 */}
          <Section number="8" title="Disclaimers and Warranties">
            <p>
              The Platform and all services are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the fullest extent permitted by law, we disclaim:
            </p>
            <ul>
              <li>
                Any warranty that our services will meet every specific academic or institutional
                requirement
              </li>
              <li>
                Any guarantee of specific grades, placements, or employment outcomes
              </li>
              <li>
                Any warranty regarding the completeness or accuracy of third-party tools or APIs
                referenced in our projects
              </li>
            </ul>
            <p>
              We do not guarantee uninterrupted, error-free access to the Platform at all times.
            </p>
          </Section>

          {/* 9 */}
          <Section number="9" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Harviera IT Solutions LLP shall
              not be liable for:
            </p>
            <ul>
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of data, revenue, or goodwill arising from use of our services</li>
              <li>Academic outcomes, disciplinary actions, or institutional decisions</li>
              <li>
                Technical issues beyond our reasonable control (internet downtime, third-party
                platform outages)
              </li>
            </ul>
            <p>
              Our total aggregate liability for any claim arising from our services shall not
              exceed the amount you paid for the specific service giving rise to the claim.
            </p>
          </Section>

          {/* 10 */}
          <Section number="10" title="Governing Law and Dispute Resolution">
            <SubHeading>10.1 Governing Law</SubHeading>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes shall be subject to the exclusive jurisdiction of the courts located in{' '}
              <strong>Hyderabad, Telangana, India</strong>.
            </p>
            <SubHeading>10.2 Informal Resolution</SubHeading>
            <p>
              Before initiating any formal dispute, you agree to contact us first at{' '}
              <a href="mailto:hello@therealskill.com">hello@therealskill.com</a> and allow us a
              reasonable opportunity (up to 30 days) to resolve the matter informally.
            </p>
            <SubHeading>10.3 Arbitration</SubHeading>
            <p>
              If informal resolution fails, disputes shall be resolved through binding arbitration
              in Hyderabad under the Arbitration and Conciliation Act, 1996, with a single
              arbitrator mutually agreed upon by both parties.
            </p>
          </Section>

          {/* 11 */}
          <Section number="11" title="Changes to Terms">
            <p>
              We may revise these Terms at any time. The revised Terms will be posted on this page
              with an updated &ldquo;Last Updated&rdquo; date. For material changes that affect
              your rights, we will notify active customers via email or WhatsApp.
            </p>
            <p>
              Your continued use of the Platform after changes are posted constitutes your
              acceptance of the revised Terms.
            </p>
          </Section>

          {/* 12 */}
          <Section number="12" title="Contact Us">
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="not-prose mt-4 p-5 rounded-xl bg-surface border border-surface-border">
              <p className="text-txt-primary font-semibold mb-1">Harviera IT Solutions LLP</p>
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
              <p className="text-txt-muted text-xs mt-2">Business hours: Mon–Sat, 9 AM–8 PM IST</p>
            </div>
          </Section>

          {/* Back links */}
          <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-surface-border text-txt-secondary text-sm font-medium hover:text-txt-primary hover:border-accent-green/40 transition-all"
            >
              ← Back to Home
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-surface-border text-txt-secondary text-sm font-medium hover:text-txt-primary hover:border-accent-green/40 transition-all"
            >
              View Privacy Policy →
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
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-syne text-sm font-bold shrink-0">
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
