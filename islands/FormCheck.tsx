export default function FormCheck() {
    return (
        <form
            className="flex flex-col gap-2 bg-white p-6 rounded shadow"
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);

                const res = await fetch("/admin/timetable", {
                    method: "POST",
                    body: formData,
                });

                if (!res.ok) {
                    const text = await res.text();
                    alert(text);
                } else {
                    globalThis.location.href = "/admin/timetable";
                }
            }}
        >
            <p className="text-lg">Tunni juhendaja nimi</p>
            <input
                type="text"
                name="instructor"
                placeholder="Juhendaja nimi"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Tunni või ürituse nimetus</p>
            <input
                type="text"
                name="classname"
                placeholder="Tunni nimi"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Tunni või ürituse kuupäev</p>
            <input
                type="date"
                name="date"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Alguseg</p>
            <input
                type="time"
                name="start_time"
                placeholder="algusaeg"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Lõppaeg</p>
            <input
                type="time"
                name="end_time"
                placeholder="lõppaeg"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Maksimaalne broneeringute arv</p>
            <input
                type="number"
                name="max_bookings"
                placeholder="Maksimaalne broneeringute arv"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Hind</p>
            <input
                type="number"
                name="price"
                placeholder="Hind"
                required
                className="p-2 border rounded"
            />
            <p className="text-lg">Registreeringu tüüp</p>
            <select
                name="type"
                required
                className="p-2 border rounded"
            >
                <option value="">Vali registreeringu tüüp</option>
                <option value="Tund">Tund</option>
                <option value="Üritus">Üritus</option>
            </select>
            <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
                Lisa tund
            </button>
        </form>
    )
}