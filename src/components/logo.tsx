import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src={"/vehiclerecordhub.png"} width={150} height={150} className="lg:w-36 w-28" alt="elites vehicle check" />
        </Link>
    )
}