import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { StyledLoginButton, StyledLoginDiv } from "./StyledTopRightLogin";

export default function TopRightLogin() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <StyledLoginDiv>
      {session ? (
        <StyledLoginButton logout onClick={() => signOut()}>
          Logout
        </StyledLoginButton>
      ) : (
        <StyledLoginButton onClick={() => router.push("/login")}>
          Login
        </StyledLoginButton>
      )}
    </StyledLoginDiv>
  );
}
