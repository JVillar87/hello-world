"use client";

import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathName = usePathname();
    const productID = pathName.split("/")[2];
    const reviewID = pathName.split("/")[4];
    return (
        <div>
            <h2>Review {reviewID} not Found for product {productID}</h2>
        </div>
    );
}
//MODIFICAR CSS 404