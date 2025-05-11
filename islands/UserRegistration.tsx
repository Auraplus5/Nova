import { createClient } from "jsr:@supabase/supabase-js@2";
import { useState } from "preact/hooks";

export default function UserRegistration(props: {
  supabaseUrl: string;
  supabaseAnonKey: string;
}) {
  const supabase = createClient(props.supabaseUrl, props.supabaseAnonKey);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("E-mail ja parool on nõutud");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (data.user) {
      await supabase
        .from("users")
        .insert([{
          id: data.user.id,
          email,
          first_name: name.split(" ")[0],
          last_name: name.split(" ")[1] ?? "",
        }]);
    }

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Konto loodud! Palun kontrolli oma e-posti.");
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Loo uus kasutaja</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Nimi
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Nimi"
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
            required
            className="p-2 border rounded w-full"
          />
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
            className="p-2 border rounded w-full"
          />
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Parool
          </label>
          <input
            type="password"
            id="password"
            placeholder="Parool"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            required
            className="p-2 border rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Loo kasutaja
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
