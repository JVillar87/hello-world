"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleID: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const { articleID } = use(params);
    const {lang = "en"} = use (searchParams);

    return <div>
        <h1>New Article {articleID}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleID}?lang=en`}>English</Link><br></br>
            <Link href={`/articles/${articleID}?lang=es`}>Español</Link><br></br>
            <Link href={`/articles/${articleID}?lang=fr`}>French</Link><br></br>
        </div>
    </div>
}