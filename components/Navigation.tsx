"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BowRibbon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* SVG paths */}
  </svg>
);

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
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <BowRibbon />
            <span className="font-semibold text-xl text-black">Ella's Foundation</span>
          </Link>

          <div className="flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`transition-colors ${
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
