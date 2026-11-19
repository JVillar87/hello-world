"use client";

import ErrorWrapper from "./error-wrapper";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body>
                <ErrorWrapper error={error} reset={reset} />
            </body>
        </html>
    );
}
