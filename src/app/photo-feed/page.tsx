import Link from "next/link";
import Image from "next/image";
import wonders from "./wonders";

export default function PhotoFeed() {
    return (
        <main className="photo-feed">
            <h1>
                New Wonders of the World
            </h1>
            <div className="photo-grid">
                {wonders.map(({ id, src, name }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image
                            alt={name}
                            src={src}
                            className="w-full object-cover aspect-square"
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
