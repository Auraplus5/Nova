import { createClient } from "jsr:@supabase/supabase-js@2";


const supabase_url=Deno.env.get("SUPABASE_URL");
const supabase_key=Deno.env.get("SUPABASE_ANON_KEY");

if (!supabase_url || !supabase_key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env");
}

const supabase = createClient(supabase_url, supabase_key);


export default supabase;


