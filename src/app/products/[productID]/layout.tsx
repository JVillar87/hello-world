export default function ProductDetailsLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
    <>
        {children}
        <h2>Featured products</h2>
    </>
        );
}

//HEREDA DEL LAYOUT ROOT (PRINCIPAL)
//TRABAJAR EN LOS MULTIPLE ROOT LAYOUT PARA EDITAR PÁGINAS