import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
    title: {
        default: "Next.js Tutorial - Codevolution",
        template: "%s | Codevolution",

    },
    description: "My Next.js application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
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
            </body>
        </html>
    );
}