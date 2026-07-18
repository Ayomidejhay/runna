"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/runnars-app/id6759202549";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.runnarsapp.mobile";

type Destination = {
  label: string;
  url: string;
};

function getStoreDestination(): Destination | null {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const touchPoints = navigator.maxTouchPoints;

  const isAndroid = /Android/i.test(userAgent);
  // Modern iPads can identify themselves as macOS, so include touch support.
  const isIOS =
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (platform === "MacIntel" && touchPoints > 1);

  if (isAndroid) {
    return { label: "Google Play", url: PLAY_STORE_URL };
  }

  if (isIOS) {
    return { label: "the App Store", url: APP_STORE_URL };
  }

  return null;
}

export default function OpenAppPage() {
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const store = getStoreDestination();
    setDestination(store);

    // App/Universal Links reach this page only when the app was not opened.
    // Mobile visitors go to their store; other devices return to the website.
    const timeout = window.setTimeout(() => {
      window.location.replace(store?.url ?? "/");
    }, 700);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f7faff] px-6 py-20 text-center">
      <section className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <img
          src="/logohome.png"
          alt="Runnars"
          className="mx-auto mb-6 h-16 w-16 object-contain"
        />
        <h1 className="text-2xl font-bold text-[#070E1A] md:text-3xl">
          Continue with Runnars
        </h1>
        <p className="mt-3 text-base text-[#667085]">
          {destination
            ? `The Runnars app is not installed. Taking you to ${destination.label}…`
            : "This link opens in the Runnars mobile app. Returning you to our website…"}
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {destination && (
            <a
              href={destination.url}
              className="rounded-full bg-[#1570EF] px-6 py-3 font-medium text-white transition hover:bg-[#0f5fd0]"
            >
              Get Runnars on {destination.label}
            </a>
          )}
          <Link
            href="/"
            className="rounded-full border border-[#D0D5DD] px-6 py-3 font-medium text-[#344054] transition hover:bg-[#F2F4F7]"
          >
            Visit the Runnars website
          </Link>
        </div>
      </section>
    </main>
  );
}
