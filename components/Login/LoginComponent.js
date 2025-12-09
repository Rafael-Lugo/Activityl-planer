import { signOut, useSession } from "next-auth/react";

export default function LoginComponent() {
  const { data: session } = useSession();
  if (session) {
    return <button onClick={() => signOut()}>Logout</button>;
  }
}
