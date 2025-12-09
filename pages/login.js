import LoginComponent from "@/components/Login/LoginComponent";
import { StyledErrorMessageDiv } from "@/components/Login/StyledMessages";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const { error } = router.query;
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  return (
    <div>
      <h1>Activity Planner</h1>
      {showError && (
        <StyledErrorMessageDiv>
          Login failed. Please try again.
        </StyledErrorMessageDiv>
      )}

      <LoginComponent />
    </div>
  );
}
