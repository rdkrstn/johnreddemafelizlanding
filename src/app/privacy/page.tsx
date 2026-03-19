import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Johnred Demafeliz Revenue Systems Consulting. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="section-title mb-6">Privacy Policy</h1>
            <p className="mb-12 text-sm text-muted-foreground">
              Last updated: March 19, 2026
            </p>

            <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
              {/* Introduction */}
              <section>
                <p>
                  This privacy policy describes how Johnred Demafeliz
                  (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                  collects, uses, and protects your personal information when you
                  visit{" "}
                  <a
                    href="https://johnred.dev"
                    className="text-accent-teal hover:underline"
                  >
                    johnred.dev
                  </a>{" "}
                  or engage with our services.
                </p>
              </section>

              {/* What We Collect */}
              <section>
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  What Data We Collect
                </h2>
                <p className="mb-4">
                  We collect information that you voluntarily provide to us,
                  including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-foreground">
                      Contact form submissions
                    </strong>{" "}
                    &mdash; your name, email address, and any message you send
                    through our website forms.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Calendly bookings
                    </strong>{" "}
                    &mdash; your name, email, and any information you provide
                    when scheduling a strategy call through Calendly.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Usage analytics
                    </strong>{" "}
                    &mdash; anonymous, aggregated data about how visitors
                    interact with our website (page views, referral sources,
                    device type).
                  </li>
                </ul>
              </section>

              {/* How We Use It */}
              <section>
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    To provide revenue systems consulting services and respond to
                    your inquiries.
                  </li>
                  <li>
                    To follow up on strategy call bookings and deliver the
                    diagnostic insights discussed.
                  </li>
                  <li>
                    To improve our website experience based on aggregated usage
                    data.
                  </li>
                  <li>
                    To send relevant follow-up communications related to our
                    services (we do not send unsolicited marketing emails).
                  </li>
                </ul>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  Third-Party Services
                </h2>
                <p className="mb-4">
                  We use the following third-party services to operate our
                  website and deliver our services:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-foreground">Calendly</strong> &mdash;
                    for scheduling strategy calls. Calendly has its own privacy
                    policy governing data collected through their platform.
                  </li>
                  <li>
                    <strong className="text-foreground">Sanity CMS</strong>{" "}
                    &mdash; for managing website content such as case studies and
                    testimonials. Sanity does not collect visitor data.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Vercel Analytics
                    </strong>{" "}
                    &mdash; for privacy-friendly, anonymous website analytics.
                    Vercel Analytics does not use cookies and does not track
                    individual visitors.
                  </li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  Your Rights
                </h2>
                <p className="mb-4">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-foreground">Access</strong> &mdash;
                    you can request a copy of any personal data we hold about
                    you.
                  </li>
                  <li>
                    <strong className="text-foreground">Correction</strong>{" "}
                    &mdash; you can request that we correct any inaccurate
                    information.
                  </li>
                  <li>
                    <strong className="text-foreground">Deletion</strong> &mdash;
                    you can request that we delete your personal data from our
                    records.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the
                  information below.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                  Contact
                </h2>
                <p>
                  If you have any questions about this privacy policy or how we
                  handle your data, please reach out at{" "}
                  <a
                    href="mailto:hello@johnred.dev"
                    className="text-accent-teal hover:underline"
                  >
                    hello@johnred.dev
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
