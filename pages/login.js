import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const { error } = router.query;
  const [showError, setShowError] = useState(false);
}
