import { createClient } from "jsr:@supabase/supabase-js@2";
import db from "./supabase.ts";

export async function getSessionUser(req: Request) {
    const cookie = req.headers.get("cookie") || "";
    const tokenMatch = cookie.match(/sb-access-token=([^;]+)/);
    const token = tokenMatch?.[1];


    const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_ANON_KEY")!,
        {
            global: {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        }
    );

    const { data: { user } } = await supabase.auth.getUser();

    const { data: profile } = await db
        .from("users")
        .select("role, first_name")
        .eq("id", user?.id)
        .single();


    return {
        user,
        role: profile?.role ?? "user",
        first_name: profile?.first_name ?? "",
        id: user?.id ?? "",
        email: user?.email ?? "",
    };
}
