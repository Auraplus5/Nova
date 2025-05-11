import { useState } from "preact/hooks";

export default function BookingActions(
  { booking, role }: {
    booking: { id: number; name: string; email: string; timetable_id: number };
    role?: string;
  },
) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    if (confirm("Kustuta broneering?")) {
      const res = await fetch(`/api/booking?id=${booking.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDeleted(true);
      } else {
        alert("Broneeringu kustutamine ebaõnnestus");
      }
    }
  };

  if (deleted) return null;

  return (
    <li className="flex justify-between items-center">
      {role === "admin" && <span>{booking.name} - {booking.email}</span>}
      <button
        className="ml-2 text-red-600 hover:underline"
        onClick={handleDelete}
      >
        Eemalda broneering
      </button>
    </li>
  );
}
