import Link from "next/link"
import { StyledBackButton } from "./StyledBackButton"
import BackIcon from "@/components/icons/back.svg"


export default function BackButton (){
    return(
        <StyledBackButton href="/" aria-label="Back to Activities">
            <BackIcon width={28} height={28} />
            </StyledBackButton>
    );
}