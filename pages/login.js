import LoginComponent from "@/components/Login/LoginComponent";
import { StyledErrorMessageDiv } from "@/components/Login/StyledMessages";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Activity Planner</h1>

      {error && (
        <StyledErrorMessageDiv>
          Login failed. Please try again.
        </StyledErrorMessageDiv>
      )}

      <LoginComponent />
    </div>
  );
}
