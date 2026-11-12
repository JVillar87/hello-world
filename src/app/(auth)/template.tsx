"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [input, setInput] = useState("");
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input value={input} onChange={((e) => setInput(e.target.value))} />
            </div>
            <nav
                style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem 0",
                }}
            >
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive ? "active" : ""}
                            style={{
                                padding: "0.5rem 1rem",
                                borderRadius: "0.25rem",
                                backgroundColor: isActive ? "lightblue" : "transparent",
                            }}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            <header
                style={{
                    backgroundColor: "lightblue",
                    padding: "1rem",
                }}
            >
                Header
            </header>
            {children}
            <footer
                style={{
                    backgroundColor: "ghostwhite",
                    padding: "1rem",
                }}
            >
                <p>Footer</p>
            </footer>
        </div>
    );
}