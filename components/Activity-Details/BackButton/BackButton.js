import Link from "next/link";
import { StyledBackButton } from "./StyledBackButton";

export default function BackButton() {
  return (
    <Link href="/">
      <p>Button-Back</p>
    </Link>
  );
}
