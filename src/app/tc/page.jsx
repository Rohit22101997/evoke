"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Full-screen width Navbar */}
      <Navbar />

      {/* Page Content (Centered + Responsive) */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 text-gray-800 leading-relaxed">

        <h1 className="text-4xl font-bold mb-6 py-10">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: DD/MM/YYYY</p>

        <Section title="1. Definitions">
          <p>
            “Agency”, “We”, “Us”, “Our” refers to <b>Evoke Digital Marketing Agency</b>.
          </p>
          <p>
            “Client”, “You”, “Your” refers to the person or business using our
            services.
          </p>
          <p>
            “Services” refers to digital marketing activities including SEO,
            social media, branding, design, advertising, and related services.
          </p>
        </Section>

        <Section title="2. Scope of Services">
          <p>
            All services will be provided as per the proposal or agreement
            shared. Any extra work or change in scope may incur additional
            charges.
          </p>
        </Section>

        <Section title="3. Payments & Fees">
          <ul className="list-disc ml-5">
            <li>All services must be paid in advance unless agreed otherwise.</li>
            <li>Monthly retainers must be paid within the first 7 days of every month.</li>
            <li>Late payments may pause or delay ongoing work.</li>
          </ul>
        </Section>

        <Section title="4. Refund Policy">
          <p>
            Payments are <b>non-refundable</b>. Once work has started, no partial refunds will be provided.
          </p>
        </Section>

        <Section title="5. Client Responsibilities">
          <ul className="list-disc ml-5">
            <li>Provide accurate information, content, and timely approvals.</li>
            <li>Share account access when required.</li>
            <li>Cooperate to avoid delays in deliverables.</li>
          </ul>
        </Section>

        <Section title="6. Approval & Modifications">
          <p>
            Minor revisions are included. Major revisions or new requirements may cost extra.
          </p>
        </Section>

        <Section title="7. Performance Disclaimer">
          <p>
            Marketing results depend on multiple factors. Evoke does not guarantee sales, leads, or specific outcomes.
          </p>
        </Section>

        <Section title="8. Confidentiality">
          <p>
            Both parties agree to keep shared information, data, and credentials confidential.
          </p>
        </Section>

        <Section title="9. Intellectual Property">
          <p>
            All work remains Evoke’s property until full payment is received.
            Final files (except licensed resources) belong to the client after payments.
          </p>
        </Section>

        <Section title="10. Third-Party Costs">
          <p>
            Ad spends, tools, plugins, software, hosting, and domain costs are not included unless specified.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            Client agrees to indemnify Evoke from legal or financial claims caused by client-provided materials.
          </p>
        </Section>

        <Section title="12. Limitation of Liability">
          <p>
            Evoke is not liable for revenue loss, account bans, or disruptions caused by third-party platforms.
          </p>
        </Section>

        <Section title="13. Termination">
          <p>
            Either party may terminate with 30 days written notice. Outstanding payments must be cleared.
          </p>
        </Section>

        <Section title="14. Governing Law">
          <p>
            These terms follow Indian law. Any disputes fall under the jurisdiction of Mumbai courts.
          </p>
        </Section>

        <Section title="15. Contact">
          <p>
            For questions, contact:<br />
            <b>Evoke Digital Marketing Agency</b><br />
            Email: support@evokeagency.com<br />
            Phone: +91 XXXXX XXXXX
          </p>
        </Section>
      </div>

      {/* Full-screen width Footer */}
      <Footer />
    </div>
  );
}

// Reusable Section Component
function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
