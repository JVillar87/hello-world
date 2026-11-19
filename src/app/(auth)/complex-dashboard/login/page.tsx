"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!username.trim() || !password) {
            setError("Enter both your username and password.");
            return;
        }

        document.cookie =
            "complex-dashboard-auth=true; path=/; max-age=86400; samesite=lax";
        setError("");
        router.push("/complex-dashboard");
    }

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log in</button>
                {error && <p role="alert">{error}</p>}
            </form>
        </main>
    );
}
