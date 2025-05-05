import { useState } from "preact/hooks";
import { createClient } from "jsr:@supabase/supabase-js@2";

export default function UserLogin( props: {
    supabaseUrl: string;
    supabaseAnonKey: string;
}) {
    const supabase = createClient(props.supabaseUrl, props.supabaseAnonKey);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e: Event) => {
        e.preventDefault();

        const {data:{session}, error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });


        if (session) {
            await fetch("/api/set-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ access_token: session.access_token }),
            })
        }

        if (error) {
            setMessage("Vale e-mail või parool");
            return;
        } else {
            setMessage("Sisselogimine õnnestus!");

            globalThis.location.href = "/";
        }
    };

    return(
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Sisselogimine</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="E-post"
                    value={email}
                    onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Parool"
                    value={password}
                    onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                    required
                    className="p-2 border rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Logi sisse
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}

        </div>
    )
}