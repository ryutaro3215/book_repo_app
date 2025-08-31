import { createClient } from "@supabase/supabase-js";

const SUPABASE_LOCAL_API_URL = import.meta.env.VITE_SUPABASE_LOCAL_API_URL;
const SUPABASE_LOCAL_API_ANONKEY = import.meta.env
  .VITE_SUPABASE_LOCAL_API_ANONKEY;
const SUPABASE_PUBLIC_API_URL = import.meta.env.VITE_SUPABASE_PUBLIC_API_URL;
const SUPABASE_PUBLIC_API_ANONKEY = import.meta.env
  .VITE_SUPABASE_PUBLIC_API_ANONKEY;

export const supabase = createClient(
  // SUPABASE_LOCAL_API_URL,
  // SUPABASE_LOCAL_API_ANONKEY,
  SUPABASE_PUBLIC_API_URL,
  SUPABASE_PUBLIC_API_ANONKEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);
