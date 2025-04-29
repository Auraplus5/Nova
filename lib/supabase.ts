import { createClient } from "jsr:@supabase/supabase-js@2";


const supabase_url=Deno.env.get("SUPABASE_URL")!;
const supabase_key=Deno.env.get("SUPABASE_ANON_KEY")!;



const supabase = createClient(supabase_url, supabase_key);


export default supabase;


