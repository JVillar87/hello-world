"use client";

import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <main
            style={{
                display: "grid",
                minHeight: "70vh",
                placeItems: "center",
                padding: "3rem 1.5rem",
                background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
            }}
        >
            <section
                aria-labelledby="counter-title"
                style={{
                    width: "min(100%, 24rem)",
                    padding: "2.5rem",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid #dbeafe",
                    borderRadius: "1.25rem",
                    boxShadow: "0 1.5rem 3rem rgb(30 64 175 / 12%)",
                }}
            >
                <p
                    style={{
                        margin: "0 0 0.5rem",
                        color: "#2563eb",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                    }}
                >
                    Interactive counter
                </p>
                <h1
                    id="counter-title"
                    style={{ margin: 0, color: "#172554", fontSize: "2rem" }}
                >
                    Counter
                </h1>
                <p
                    aria-live="polite"
                    style={{
                        margin: "1.5rem 0",
                        color: "#0f172a",
                        fontSize: "4rem",
                        fontWeight: 800,
                        lineHeight: 1,
                    }}
                >
                    {count}
                </p>
                <button
                    type="button"
                    style={{
                        width: "100%",
                        padding: "0.85rem 1.25rem",
                        color: "#ffffff",
                        font: "inherit",
                        fontWeight: 700,
                        background: "#2563eb",
                        border: 0,
                        borderRadius: "0.75rem",
                        cursor: "pointer",
                    }}
                    onClick={() => setCount((currentCount) => currentCount + 1)}
                >
                    Increment
                </button>
            </section>
        </main>
    );
};
