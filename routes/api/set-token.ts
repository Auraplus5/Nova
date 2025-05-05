import { Handlers } from "$fresh/server.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

export const handler: Handlers = {
    async POST(req) {
        const { access_token } = await req.json();
        console.log("Access token:", access_token);

        if (!access_token) {
            return new Response("Missing access token", { status: 400 });
        }

        // Create Supabase client with the token in the Authorization header
        const supabase = createClient(
            Deno.env.get("SUPABASE_URL")!,
            Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
            {
                global: {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                },
            }
        );

        const { data: { user }, error } = await supabase.auth.getUser();

        if (!user || error) {
            console.error("Error fetching user:", error);
            return new Response("Invalid access token", { status: 401 });
        }

        // Set secure cookie
        const headers = new Headers();
        headers.set(
            "Set-Cookie",
            `sb-access-token=${access_token}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=3600`
        );

        return new Response(null, {
            status: 200,
            headers,
        });
    },
};