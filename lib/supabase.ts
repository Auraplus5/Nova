import { createClient } from "jsr:@supabase/supabase-js@2";
import 'jsr:@std/dotenv/load'

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!,
);
export default supabase;
