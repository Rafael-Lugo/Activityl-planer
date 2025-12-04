import { NavigationLink, NavigationList, NavigationListItem, NavigationWrapper } from "./StyledNavigation"
import router, { Router } from "next/router"

export default function Navigation (){
    return(
        <NavigationWrapper>
            <NavigationList>
                <NavigationListItem><NavigationLink href="createactivity" $highlighted={router.pathname === "/createactivity"}>Add</NavigationLink></NavigationListItem>
                 <NavigationListItem><NavigationLink href="/"$highlighted={router.pathname === "/"}>Home</NavigationLink></NavigationListItem>
                 
                 
            </NavigationList>
        </NavigationWrapper>
    )
}