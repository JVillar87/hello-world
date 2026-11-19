import Image from "next/image";
import { notFound } from "next/navigation";
import wondersImages, { type WonderImage } from "../wonders";

export const instant = false;

export function generateStaticParams() {
    return wondersImages.map((photo) => ({ id: photo.id }));
}

export default async function PhotoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const photo: WonderImage | undefined = wondersImages.find(
        (item) => item.id === id,
    );

    if (!photo) {
        notFound();
    }

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <h1 className="text-center text-3xl font-bold my-4">
                    {photo.name}
                </h1>
                <Image
                    alt={photo.name}
                    src={photo.src}
                    className="w-full object-cover aspect-square"
                />
                <div className="bg-white py-4">
                    <h3>{photo.photographer}</h3>
                    <h3>{photo.location}</h3>
                </div>
            </div>
        </div>
    );
}
