import Link from "next/link"
import { Button } from "@/components/Button/Button"

export default function BackButton (){


    return(
        <Link href="/">
        <Button type="button">Back</Button>
        </Link>
    )
}