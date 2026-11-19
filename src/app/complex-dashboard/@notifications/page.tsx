import { Card } from "@/src/components/card";
import Link from "next/link"

export default function NotificationsDashboard() {
    return (
    <Card>
        <div>Notifications</div>
        <div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </div>
    </Card>);
}

//SLOTS - RUTA PARALELA