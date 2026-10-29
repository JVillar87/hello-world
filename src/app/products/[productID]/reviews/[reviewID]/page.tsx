import { notFound } from "next/navigation";

export default async function ProductReview({
    params
}: {
    params: Promise<{ productID: string; reviewID: string }>;
}) {
    const { productID, reviewID } = await params
    
    if (parseInt(reviewID) > 1000) {
        notFound();
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