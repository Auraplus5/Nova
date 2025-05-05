import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET() {
        const headers = new Headers();
        headers.set("Set-Cookie", "sb-access-token=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax");
        headers.set("Location", "/");

        return new Response(null, {
            status: 303,
            headers,
        });
    },
};