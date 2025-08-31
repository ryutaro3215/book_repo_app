import { useEffect, useState } from "react";
import { supabase } from "../api/SupabaseAuth";
import { useNavigate } from "react-router";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    const signupSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setState("error");
        return;
      }
      if (!data.session) {
        setState("error");
        return;
      }
      setState("ok");
      navigate("/auth/signup/welcome", { replace: true });
    };
    signupSession();
  }, [navigate]);

  if (state == "loading") {
    return <p>Loading....</p>;
  } else if (state == "error") {
    return <p>Link expired or invalid. Please try again.</p>;
  } else return;
}
