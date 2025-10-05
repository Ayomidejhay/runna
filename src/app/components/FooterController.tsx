"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterController() {
  const pathname = usePathname();

  // ✅ Hide footer on the About page
  const hideFooter = pathname === "/about";

  if (hideFooter) return null;

  return <Footer />;
}
