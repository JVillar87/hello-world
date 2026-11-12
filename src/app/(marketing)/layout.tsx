import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hello World",
    description: "My Next.js application",
};

export default function MarketingLayout({
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