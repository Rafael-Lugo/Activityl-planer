import { useRouter } from "next/router";
import { HeaderWrapper, HeaderTitle } from "./styledHeader";

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
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
}