import { redirect } from "next/navigation";
import { connection } from "next/server";

export const instant = false;

function getRandomInt (count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview({
    params
}: {
    params: Promise<{ productID: string; reviewID: string }>;
}) {
    await connection();
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review");
    }
    const { productID, reviewID } = await params
    
    if (parseInt(reviewID) > 1000) {
        //notFound();
        redirect("/products");
    }

    return (
        <div>
            <h1>All reviews for product {productID}</h1>

            <ul>
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
                <li>Review 4</li>
            </ul>
        </div>
    );

};
//MODIFICAR PARA AÑADIR REVIEWS DE LA COMPRA-VENTA ENTRADAS