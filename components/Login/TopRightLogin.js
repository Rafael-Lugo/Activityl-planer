import { signOut, useSession } from "next-auth/react";
import {
  StyledDivFix,
  StyledHeader,
  StyledLoginDiv,
  StyledLoginLink,
  StyledRelativeDiv,
} from "./StyledTopRightLogin";
import Link from "next/link";

export default function TopRightLogin() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <StyledLoginLink>Login</StyledLoginLink>;
  }

  return (
    <StyledRelativeDiv>
      <StyledLoginDiv>
        {session ? (
          <StyledLoginLink logout onClick={() => signOut()}>
            Logout
          </StyledLoginLink>
        ) : (
          <Link href="/login">
            <StyledLoginLink>Login</StyledLoginLink>
          </Link>
        )}
      </StyledLoginDiv>
    </StyledRelativeDiv>
  );
}
