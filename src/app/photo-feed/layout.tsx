import type React from "react";
import "./styles.css";

export default function Layout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}
