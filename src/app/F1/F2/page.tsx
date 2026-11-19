import Link from "next/link";

export default function F2() {
    return (
        <>
            <h1>F2 PAGE</h1>
            <Link href="/F4">F4</Link>
            <Link href="/F1/F2/inner-F2">Inner F2</Link>
        </>
    );
}