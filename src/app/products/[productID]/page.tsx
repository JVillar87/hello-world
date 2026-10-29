export default async function ProductDetails( { 
    params
    } : {
     params: Promise <{productID: string}>
}) {
    const productID = ( await params ).productID;
    return <h1>Details about Product {productID}</h1>;
}
//MODIFICAR A DETALLES DE EVENTOS