"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png";

export function Footer() {
    const pathname = usePathname();

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/get-involved", label: "Get Involved" },
    ];

    return (
        <footer className="bg-white border-t border-black/10 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Logo and Contact Info */}
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <Image src={logo} alt="Ella's Foundation Logo" className="h-16 w-auto p-2" />
                            <span className="text-sm text-gray-700">© 2025 Gabriella Shumate Memorial Foundation</span>
                        </div>
                        <div className="text-sm text-gray-700 relative inline-block group">
                            <button className="inline-block bg-[#FFB6D9] hover:bg-[#fcaed3] text-black font-semibold py-2 px-4 rounded transition-colors cursor-default">Contact Us!</button>
                            <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-[#FFE5F1] text-black px-4 py-3 rounded-lg shadow-lg whitespace-nowrap z-10">
                                <div className="text-sm font-semibold">daciashu@gmail.com</div>
                                <div className="text-sm">(253)-852-5022</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Navigation Links */}
                    <div className="flex flex-col md:items-end gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`transition-colors text-sm ${
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
        </footer>
    );
}