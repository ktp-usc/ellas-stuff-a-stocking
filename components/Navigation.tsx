"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/get-involved", label: "Get Involved" },
  ];

  return (
    <nav className="bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-40">
          <Link href="/" className="flex items-center h-32 w-auto">
              <Image src="/Images/canvaV6.png" alt="Ella's Foundation Logo" width={256} height={256} className="h-full w-auto" style={{ marginTop: '-32px', marginLeft: '-16px' }} />
          </Link>

          <div className="flex gap-6" style={{ marginTop: '-16px' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg transition-colors ${
                    isActive
                      ? "text-black underline decoration-2"
                      : "text-black/60 hover:text-black"
                  }`}
                  style={{
                    textDecorationColor: isActive ? "#FFB6D9" : undefined,
                    textUnderlineOffset: "6px",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
