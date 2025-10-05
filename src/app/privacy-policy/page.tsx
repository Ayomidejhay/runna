import React from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div>
        <main className="max-w-4xl mx-auto px-6 pt-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: October, 2025
      </p>

      <p className="mb-6">
        At <span className="font-semibold">Runnars</span>, your privacy matters.
        We’re committed to protecting your personal and pet-related data, and to
        being transparent about how we collect, use, and store it.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="mb-3">
          We collect limited information to make the app function properly and improve your experience:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Account Information:</span> Email, username, and profile photo (if provided).
          </li>
          <li>
            <span className="font-semibold">Pet Data:</span> Pet name, breed, age, weight, and health activity details.
          </li>
          <li>
            <span className="font-semibold">Activity Data:</span> Walk duration, distance, GPS location (only during active walks), and performance insights.
          </li>
          <li>
            <span className="font-semibold">Device Information:</span> Type of device, app version, and crash logs (to improve app reliability).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="mb-3">We use your data to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enable walk tracking and wellness insights</li>
          <li>Improve app performance and personalization</li>
          <li>Support community interactions like challenges, comments, and messaging</li>
          <li>Provide customer support and technical updates</li>
        </ul>
        <p className="mt-4">
          We <span className="font-semibold">do not sell or share</span> your personal or pet data with third-party advertisers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
        <p>
          Your data is stored securely using modern encryption standards. Only you
          control what’s visible publicly (for example, when joining challenges or
          sharing posts).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
        <p>
          We may use trusted third-party services such as Firebase, Google Maps, or
          analytics tools to improve app performance and location tracking. These
          providers comply with data protection standards (e.g., GDPR).
        </p>
      </section>

      <section className="">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p className="mb-3">You can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Request a copy of your data</li>
          <li>Delete your account at any time</li>
          <li>Manage what you share in community features</li>
        </ul>
        <p className="mt-4">
          To make a request, contact us at{" "}
          <a
            href="mailto:support@runnarsapp.com"
            className="text-blue-600 hover:underline"
          >
            support@runnarsapp.com
          </a>
          .
        </p>
      </section>

      {/* <p className="text-sm text-gray-500 mt-10 text-center">
        © {new Date().getFullYear()} Runnars. All rights reserved.
      </p> */}
    </main>
    </div>
  );
}
