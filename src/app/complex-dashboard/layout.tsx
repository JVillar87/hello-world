import type { ReactNode } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Card } from "@/src/components/card";

type ComplexDashboardLayoutProps = {
    children: ReactNode;
    users: ReactNode;
    revenue: ReactNode;
    notifications: ReactNode;
};

export default async function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
}: ComplexDashboardLayoutProps) {
    const cookieStore = await cookies();
    const isLoggedIn =
        cookieStore.get("complex-dashboard-auth")?.value === "true";

    if (!isLoggedIn) {
        return (
            <main>
                <Card>
                    <Link href="/complex-dashboard/login">
                        Please login to continue
                    </Link>
                </Card>
            </main>
        );
    }

    return (
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {users}
                    {revenue}
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                    {notifications}
                </div>
            </div>
        </>
    );
}
