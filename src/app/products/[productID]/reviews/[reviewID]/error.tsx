"use client";

import ErrorWrapper from "@/src/app/error-wrapper";

export default function ErrorBoundary({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <ErrorWrapper
        error={error}
        reset={reset}
        message="Something went wrong while loading this review."
    />;
}
