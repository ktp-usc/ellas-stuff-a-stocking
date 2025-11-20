"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import ellas_logo from "@/public/Images/gbs-logo.jpeg";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/get-involved", label: "Get Involved" },
  ];

  return (
    <nav className="bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">

          {/* Logo */}
          <Link href="/" className="flex items-center h-24">
            <Image
              src={ellas_logo}
              alt="Ella's Foundation Logo"
              width={200}
              height={200}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 mt-[-16px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg ${
                    isActive ? "text-black underline decoration-2" : "text-black/60 hover:text-black"
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

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="h-8 w-8 text-black" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="flex flex-col gap-4 pb-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === link.path
                    ? "text-black underline decoration-2"
                    : "text-black/70 hover:text-black"
                }`}
                style={{
                  textDecorationColor: pathname === link.path ? "#FFB6D9" : undefined,
                  textUnderlineOffset: "6px",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
