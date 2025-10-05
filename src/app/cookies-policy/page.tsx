import { div } from "framer-motion/client";
import React from "react";
import Footer from "../components/Footer";

export default function CookiesPolicyPage() {
  return (
    <div>
        <main className="max-w-4xl mx-auto px-6 pt-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-center">Cookies Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: October, 2025
      </p>

      <p className="mb-6">
        <span className="font-semibold">Runnars</span> uses cookies and similar technologies 
        to provide a better, smoother experience across our website and app.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device to help websites and apps 
          remember your preferences, activity, and settings. They play an important role 
          in enhancing usability and customizing your experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Cookies</h2>
        <p className="mb-3">We use cookies to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep you signed in</li>
          <li>Save your preferences</li>
          <li>Measure site traffic and app usage</li>
          <li>Improve our services and personalize challenges</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Managing Cookies</h2>
        <p>
          You can choose to block or delete cookies through your browser or device settings. 
          Please note that disabling cookies may affect some app functionality and user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Third-Party Cookies</h2>
        <p>
          Some cookies come from trusted analytics partners like Google Analytics or Firebase. 
          These help us understand user behavior and improve performance. They only collect 
          aggregated and anonymized data.
        </p>
      </section>

      <section className="">
        <p>
          By continuing to use <span className="font-semibold">Runnars</span>, 
          you agree to our use of cookies as described in this policy.
        </p>
      </section>

      {/* <p className="text-sm text-gray-500 mt-10 text-center">
        © {new Date().getFullYear()} Runnars. All rights reserved.
      </p> */}
    </main>
    </div>
  );
}
