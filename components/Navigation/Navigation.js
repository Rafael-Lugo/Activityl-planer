import Image from "next/image"
import { NavigationLink, NavigationList, NavigationListItem, NavigationWrapper } from "./StyledNavigation"
import router, { useRouter } from "next/router"

export default function Navigation (){
    const router =useRouter();
    return(
        <NavigationWrapper>
            <NavigationList>
                <NavigationListItem><NavigationLink href="/createactivity" $highlighted={router.pathname === "/createactivity"}>Add</NavigationLink></NavigationListItem>
                <NavigationListItem><NavigationLink href="/"$highlighted={router.pathname === "/"}>Home</NavigationLink></NavigationListItem>
            </NavigationList>
        </NavigationWrapper>
    )
}