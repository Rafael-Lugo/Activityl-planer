import ActivityForm from "@/components/CreateActivity/CreateActivityForm";
import {
  StyledLoginPromptDiv,
  StyledRestrictionLink,
} from "@/components/Login/StyledLogin";
import { useSession } from "next-auth/react";

export default function CreateActivityPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <StyledLoginPromptDiv>
        You must be logged in to create an activity. Please click
        <StyledRestrictionLink href="/login">here</StyledRestrictionLink> to
        login.
      </StyledLoginPromptDiv>
    );
  }
  return <ActivityForm />;
}
