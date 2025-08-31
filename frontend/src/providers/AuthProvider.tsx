import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../api/SupabaseAuth";
import type { Session } from "@supabase/supabase-js";
import type { AuthContextType } from "../types/AuthContext";
import { useNavigate } from "react-router";

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signup: async () => {},
  signin: async () => {},
  signout: async () => {},
  updagePassword: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      setSession(data.session ?? null);
      setLoading(false);
    };
    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") setSession(null);
      else if (session) setSession(session);
    });

    return () => {
      mounted = false;
      return subscription.unsubscribe();
    };
  }, []);

  const signup: AuthContextType["signup"] = async ({
    email,
    password,
    username,
  }) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          user_name: username,
        },
        emailRedirectTo: `${window.location.origin}/auth/signup/authcallback`,
      },
    });

    if (error) throw new Error(error.message);
  };

  const signin: AuthContextType["signin"] = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw new Error(error.message);
    setSession(data.session);
  };

  const signout: AuthContextType["signout"] = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  const updatePassword: AuthContextType["updatePassword"] = async ({
    password,
  }) => {
    const { error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) throw new Error(error.message);
  };

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        session,
        loading,
        signup,
        signin,
        signout,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
