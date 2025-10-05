// ''

// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import localFont from "next/font/local";
// import Footer from "./components/Footer";
// import { usePathname } from "next/navigation";

// // ✅ Create a separate client component for layout logic
// import React from "react";

// const satoshi = localFont({
//   src: [
//     { path: "../../public/fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
//     { path: "../../public/fonts/Satoshi-LightItalic.woff2", weight: "300", style: "italic" },
//     { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../../public/fonts/Satoshi-Italic.woff2", weight: "400", style: "italic" },
//     { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
//     { path: "../../public/fonts/Satoshi-MediumItalic.woff2", weight: "500", style: "italic" },
//     { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
//     { path: "../../public/fonts/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
//     { path: "../../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
//     { path: "../../public/fonts/Satoshi-BlackItalic.woff2", weight: "900", style: "italic" },
//   ],
//   variable: "--font-satoshi",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Runnars",
//   description: "Runnars",
//   icons: {
//     icon: [{ url: "/logohome.png", sizes: "10x10", type: "image/png" }],
//   },
// };

// // ✅ Client wrapper for conditional footer rendering
// function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const hideFooter = pathname === "/about"; // hide footer on about page

//   return (
//     <>
//       <Navbar />
//       {children}
//       {!hideFooter && <Footer />} {/* Footer only when not on /about */}
//     </>
//   );
// }

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body className={`bg-[#ffffff] ${satoshi.className} antialiased`}>
//         <LayoutWrapper>{children}</LayoutWrapper>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import FooterController from "./components/FooterController"; // 👈 new wrapper

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Satoshi-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/Satoshi-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Runnars",
  description: "Runnars",
  icons: {
    icon: [{ url: "/logohome.png", sizes: "10x10", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-[#ffffff] ${satoshi.className} antialiased`}>
        <Navbar />
        {children}
        <FooterController /> {/* 👈 conditionally shows Footer */}
      </body>
    </html>
  );
}
