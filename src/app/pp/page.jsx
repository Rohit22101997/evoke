"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white pt-10">

      {/* Full width Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 text-gray-800 leading-relaxed">

        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: DD/MM/YYYY</p>

        <Section title="1. Introduction">
          <p>
            This Privacy Policy explains how <b>Evoke Digital Marketing Agency</b>
            (“we”, “our”, “us”) collects, uses, and protects your information when
            you use our website or services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <ul className="list-disc ml-5 space-y-2">
            <li><b>Personal Information</b>: Name, email address, phone number, business details.</li>
            <li><b>Usage Data</b>: IP address, device info, browser type, pages visited.</li>
            <li><b>Marketing Data</b>: Data required for running ads, analytics, or campaigns.</li>
            <li><b>Cookies</b>: To improve user experience and website performance.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc ml-5 space-y-2">
            <li>To provide and improve our marketing services.</li>
            <li>To communicate with you about projects, updates, and support.</li>
            <li>To run advertising campaigns on your behalf.</li>
            <li>To analyze website performance and user behaviour.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </Section>

        <Section title="4. Sharing Your Information">
          <p>
            We do <b>not sell</b> your personal data.  
            We may share information with:
          </p>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>Trusted partners like Google, Meta, or analytics tools.</li>
            <li>Service providers (hosting, billing, email tools).</li>
            <li>Legal authorities, if required by law.</li>
          </ul>
        </Section>

        <Section title="5. Data Security">
          <p>
            We implement strong measures to protect your information.  
            However, no method of transmission over the internet is 100% secure.
          </p>
        </Section>

        <Section title="6. Cookies & Tracking Technologies">
          <p>
            We use cookies to:
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Improve website performance</li>
            <li>Store user preferences</li>
            <li>Analyze traffic and behaviour</li>
          </ul>
          <p className="mt-2">You may disable cookies in your browser settings.</p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            Our website may contain links to third-party sites.  
            We are not responsible for their content or privacy practices.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <ul className="list-disc ml-5 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time</li>
            <li>Request limitations on processing</li>
          </ul>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            We do not knowingly collect information from children under 13.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy occasionally.  
            Changes will be posted with an updated “Last Updated” date.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            For any questions, contact us:<br />
            <b>Evoke Digital Marketing Agency</b><br />
            Email: support@evokeagency.com<br />
            Phone: +91 XXXXX XXXXX
          </p>
        </Section>

      </div>

      {/* Full width Footer */}
      <Footer />
    </div>
  );
}

// Shared Section Component
function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
