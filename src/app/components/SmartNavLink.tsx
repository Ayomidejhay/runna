"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  href: string; 
  label: string;
  setMobileMenuOpen?: (val: boolean) => void;
  className?: string;
}

export default function SmartNavLink({ href, label, setMobileMenuOpen, className }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen?.(false);

    const targetId = href.replace("/", "").replace("#", "");

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return (
    <Link href={`/#${href.replace("#", "")}`} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}
