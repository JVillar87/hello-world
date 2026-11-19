import Link from "next/link";

export default function F1(){
    return (
    <>
        <h1>F1 PAGE</h1>
        <div>
            <Link href={"/F1/F2"}>F2</Link><br></br>
            <Link href={"/F3"}>F3</Link>
        </div>
    </>
    );
}