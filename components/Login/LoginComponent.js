import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  StyledLoginContainerDiv,
  StyledLoginBoxDiv,
  StyledLoginButton,
  StyledLoginHeader,
} from "./StyledLogin";

export default function LoginComponent() {
  const { data: session } = useSession();

  return (
    <StyledLoginContainerDiv>
      {session ? (
        <StyledLoginButton logout onClick={() => signOut()}>
          Logout
        </StyledLoginButton>
      ) : (
        <StyledLoginBoxDiv>
          <StyledLoginHeader>Login using:</StyledLoginHeader>
          <StyledLoginButton
            onClick={() => signIn("github", { callbackUrl: "/?login=success" })}
          >
            <Image
              src="/githubLogo.png"
              alt="GitHub logo"
              width={50}
              height={50}
            />
            GitHub
          </StyledLoginButton>
        </StyledLoginBoxDiv>
      )}
    </StyledLoginContainerDiv>
  );
}
