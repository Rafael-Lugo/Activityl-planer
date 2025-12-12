import { useRouter } from "next/router";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderContent,
  HeaderLogo,
} from "./styledHeader";
import LogoIcon from "./../icons/logo.svg";

export default function Header() {
  const router = useRouter();

  const titles = {
    "/": "Activity Planner",
    "/favorite": "Favorites",
    "/createactivity": "Create Activity",
  };

  const title = titles[router.pathname] || "Activity Planner";

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogo>
          <LogoIcon aria-hidden="true" />
        </HeaderLogo>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContent>
    </HeaderWrapper>
  );
}
