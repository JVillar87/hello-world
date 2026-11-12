"use client"

import {useRouter} from "next/navigation";


export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing your order")
        router.push("/"); //Redirige a la home
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>PLACE ORDER</button>
        </>
    )
}