import { useState } from "preact/hooks";

export default function TimetableActions({ id, currentData }: { id: number; currentData: any }) {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ ...currentData });

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setForm({ ...form, [target.name]: target.value });
    };

    const handleSave = async () => {
        setLoading(true);
        const res = await fetch(`/admin/timetable`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...form }),
        });
        setLoading(false);
        setShowForm(false);
        if (res.ok) location.reload();
        else alert("Uuendamine ebaõnnestus. " + (await res.text()));
    };

    const handleDelete = async () => {
        if (!confirm("Kustuta see tund?")) return;
        setLoading(true);
        const res = await fetch(`/admin/timetable?id=${id}`, { method: "DELETE" });
        setLoading(false);
        if (res.ok) location.reload();
        else alert("Kustutamine ebaõnnestus");
    };

    return (
        <td class="border-b p-4 space-y-2">
            <button onClick={handleDelete} disabled={loading} class="text-sm text-red-600 hover:underline">
                Kustuta
            </button>
            <br />
            <button onClick={() => setShowForm(true)} class="text-sm text-blue-600 hover:underline">
                Muuda
            </button>

            {showForm && (
                <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div class="bg-white p-6 rounded w-full max-w-lg space-y-4">
                        <h2 class="text-xl font-bold mb-2">Muuda tundi</h2>
                        {["instructor", "classname", "date", "start_time", "end_time", "price", "max_bookings", "type"].map((field) => (
                            <div key={field}>
                                <label class="block font-medium">{field}</label>
                                <input
                                    class="w-full border p-2"
                                    name={field}
                                    value={form[field] ?? ""}
                                    onInput={handleChange}
                                    type={field === "date" ? "date" : "text"}
                                />
                            </div>
                        ))}
                        <div class="flex justify-end space-x-4">
                            <button onClick={() => setShowForm(false)} class="text-gray-600 hover:underline">Tühista</button>
                            <button onClick={handleSave} disabled={loading} class="bg-blue-600 text-white px-4 py-2 rounded">
                                Salvesta
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </td>
    );
}
