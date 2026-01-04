"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LicensePage() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* Full width Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 text-gray-800 leading-relaxed">

        <h1 className="text-4xl font-bold mb-6">License Agreement</h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: DD/MM/YYYY</p>

        <Section title="1. Introduction">
          <p>
            This License Agreement (“Agreement”) outlines the terms under which 
            <b> Evoke Digital Marketing Agency </b> grants usage rights for creative 
            assets, software, content, and digital deliverables provided to clients.
          </p>
        </Section>

        <Section title="2. Ownership of Materials">
          <p>
            All creative assets, designs, code, strategies, and marketing 
            materials created by Evoke remain the property of the Agency unless 
            fully paid for.  
          </p>
          <p>
            Upon full payment, the client receives usage rights but not complete
            ownership unless explicitly stated.
          </p>
        </Section>

        <Section title="3. License Granted to Client">
          <p>
            Upon full payment, the client is granted a **non-exclusive, 
            non-transferable, revocable license** to use:
          </p>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>Brand creatives</li>
            <li>Logos (if included in project scope)</li>
            <li>Marketing materials</li>
            <li>Ad creatives & campaign assets</li>
            <li>Website content or code (if paid in full)</li>
          </ul>
        </Section>

        <Section title="4. Usage Restrictions">
          <p>The client <b>may not</b>:</p>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>Resell or redistribute assets without permission</li>
            <li>Claim authorship for Agency-created materials</li>
            <li>Use assets in illegal, harmful, or fraudulent activities</li>
            <li>Modify core branding assets without approval (for logo packages)</li>
            <li>Share licensed files with third parties without written consent</li>
          </ul>
        </Section>

        <Section title="5. Third-Party Licenses">
          <p>
            Some materials may include third-party resources such as:
          </p>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>Stock images</li>
            <li>Fonts</li>
            <li>Templates</li>
            <li>Plugins or software</li>
          </ul>
          <p className="mt-2">
            These remain under their respective owners’ licenses.  
            The client is responsible for obtaining required permissions 
            unless included by Evoke.
          </p>
        </Section>

        <Section title="6. Software & Code License">
          <p>
            For website, app, or software-related work:
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Clients receive rights only for the deployed version.</li>
            <li>Source code may not be shared unless explicitly included in the contract.</li>
            <li>Reproduction, resale, or rebranding of software/code is prohibited.</li>
          </ul>
        </Section>

        <Section title="7. Termination of License">
          <p>
            Evoke reserves the right to revoke the license if:
          </p>
          <ul className="list-disc ml-5 space-y-2 mt-2">
            <li>Payments are pending</li>
            <li>The client violates terms or misuses the materials</li>
            <li>Fraudulent or unauthorized use is detected</li>
          </ul>
        </Section>

        <Section title="8. Liability Disclaimer">
          <p>
            Evoke is not responsible for legal issues arising from misuse of the licensed
            materials or failure to follow brand guidelines.
          </p>
        </Section>

        <Section title="9. Modifications to Agreement">
          <p>
            Evoke may update this License Agreement at any time.  
            Updates will be posted with a revised “Last Updated” date.
          </p>
        </Section>

        <Section title="10. Contact Information">
          <p>
            For license-related questions, contact:<br />
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
