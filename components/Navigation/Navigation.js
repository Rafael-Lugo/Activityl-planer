import {
  NavigationLink,
  NavigationList,
  NavigationListItem,
  NavigationWrapper,
} from "./StyledNavigation";
import { useRouter } from "next/router";

import  HomeIcon from "../icons/home.svg";
import  BookmarkIcon from "../icons/bookmark.svg";
import  AddIcon from "../icons/add.svg";

export default function Navigation() {
  const router = useRouter();
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationListItem>
          <NavigationLink
            href="/createactivity"
            $highlighted={router.pathname === "/createactivity"}
          >
            <AddIcon />
          </NavigationLink>
        </NavigationListItem>

        <NavigationListItem>
          <NavigationLink href="/" $highlighted={router.pathname === "/"}>
            <HomeIcon />
          </NavigationLink>
        </NavigationListItem>

        <NavigationListItem>
          <NavigationLink
            href="/favorite"
            $highlighted={router.pathname === "/favorite"}
          >
            <BookmarkIcon />
          </NavigationLink>
          <NavigationLink
            href="/favorite"
            $highlighted={router.pathname === "/favorite"}
          >
            Favorites
          </NavigationLink>
          <NavigationLink
            href="/mapview"
            $highlighted={router.pathname === "/mapview"}
          >
            Map
          </NavigationLink>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
}
