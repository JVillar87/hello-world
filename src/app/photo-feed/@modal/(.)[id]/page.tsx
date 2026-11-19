import Image from "next/image";
import wondersImages, { type WonderImage } from "@/src/app/photo-feed/wonders";
import Modal from "@/src/components/modal";

export const instant = false;

export function generateStaticParams() {
    return wondersImages.map((photo) => ({ id: photo.id }));
}

export default async function PhotoModal({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const photo: WonderImage =
        wondersImages.find((item) => item.id === id) ?? wondersImages[0];

    return (
        <Modal>
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />
            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    );
}
