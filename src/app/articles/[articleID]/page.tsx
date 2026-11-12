import Link from "next/link";

export default async function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleID: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const { articleID } = await params;
    const { lang } = await searchParams;

    return <div>
        <h1>New Article {articleID}</h1>
        <p>Reading in language: {lang ?? "en"}</p>

        <div>
            <Link href="/articles/id?language=en">English</Link><br></br>
            <Link href="/articles/id?language=es">Español</Link><br></br>
            <Link href="/articles/id?language=fr">French</Link><br></br>
        </div>
    </div>
}