import Link from "next/link"
import { StyledBackButton } from "./StyledBackButton"

export default function BackButton (){


    return(
        <>
        <Link href="/">
        <StyledBackButton>Back</StyledBackButton>
        </Link>
        </>
    )
}