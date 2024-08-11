import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

import { supabaseApiKey, supabaseUrl } from "../Utils/Constants";

export const supabase = createClient(
  "https://qrdvnpzfzthrucqyvnea.supabase.co",
  supabaseApiKey ?supabaseApiKey:"jejndjen",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
