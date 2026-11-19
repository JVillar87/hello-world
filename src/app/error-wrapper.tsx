"use client";

import { useEffect } from "react";

type ErrorWrapperProps = {
    error: Error & { digest?: string };
    reset: () => void;
    message?: string;
};

export default function ErrorWrapper({
    error,
    reset,
    message = "An unexpected error occurred. Please try again.",
}: ErrorWrapperProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <h1>Something went wrong</h1>
            <p>{message}</p>
            <button type="button" onClick={reset}>
                Try again
            </button>
        </main>
    );
}
