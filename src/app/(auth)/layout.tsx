import type { Metadata } from "next";
import NavLinks from "./NavLinks";

export const metadata: Metadata = {
    title: {
        default: "Next.js Tutorial - Codevolution",
        template: "%s | Codevolution",

    },
    description: "My Next.js application",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavLinks />
            {children}
        </div>
    );
}