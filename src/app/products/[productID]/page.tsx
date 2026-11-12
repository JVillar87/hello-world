import { Metadata } from "next";

type Props = {
    params: Promise<{ productID: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productID;
    const title = await new Promise((resolve) => {
        setTimeout(() =>{
            resolve(`iPhone ${id}`);
        }, 100);
    });
    return {
        title: `Product ${title}`
    };
};
export default async function ProductDetails({
    params
}: {
    params: Promise<{ productID: string }>
}) {
    const productID = (await params).productID;
    return <h1>Details about Product {productID}</h1>;
}
//MODIFICAR A DETALLES DE EVENTOS
//METADATA NO FUNCIONA CON USE CLIENT!!!!