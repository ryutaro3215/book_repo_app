import type { Session, User } from "@supabase/supabase-js";

export type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signup: (args: {
    email: string;
    password: string;
    username: string;
  }) => Promise<void>;
  signin: (args: { email: string; password: string }) => Promise<void>;
  signout: () => Promise<void>;
  updatePassword: (args: { password: string }) => Promise<void>;
};
