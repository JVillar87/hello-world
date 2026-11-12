"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        aria-current={isActive ? "page" : undefined}
                        style={{
                            fontWeight: isActive ? "bold" : "normal",
                            marginRight: "1rem",
                        }}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}
