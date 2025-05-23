import { useEffect, useState } from "preact/hooks";

type ClassDay = {
  id: number;
  date: string;
  classname: string;
  start_time: string;
  end_time: string;
  instructor: string;
  max_bookings: number;
  price: number;
  type: string;
};

type Booking = {
  id: number;
  timetable_id: number;
  name: string;
  email: string;
};

export default function BookingCalendar() {
  const [classes, setClasses] = useState<ClassDay[]>([]); // State to hold class data
  const [selectedClass, setSelectedClass] = useState<ClassDay | null>(null); // State to hold selected class data
  const [daysToShow, setDaysToShow] = useState(7); // State to hold number of days to show in the calendar
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to hold error messages
  const [bookings, setBookings] = useState<Booking[]>([]); // State to hold booking data
  const [typeFilter, setTypeFilter] = useState<string>("Kõik"); // State to hold the selected class type filter
  const [classFilter, setClassFilter] = useState<string>("Kõik"); // State to hold the selected class filter

  const today = new Date();

  // Get the current week's Monday
  function getCurrentWeekMonday(referenceDate: Date): Date {
    const day = referenceDate.getDay(); // 0 (Sun) to 6 (Sat)
    const diff = (day + 6) % 7; // Convert so Monday is 0
    const monday = new Date(referenceDate);
    monday.setDate(referenceDate.getDate() - diff);
    return monday;
  }

  const [referenceMonday, setReferenceMonday] = useState(() =>
    getCurrentWeekMonday(today)
  );

  const filteredClasses = classes.filter((c) => {
    const matchedType = typeFilter === "Kõik" || c.type === typeFilter;
    const matchedClass = classFilter === "Kõik" || c.classname === classFilter;
    return matchedType && matchedClass;
  });

  // Get the dates for the week starting from the reference Monday
  const getWeekDates = (monday: Date): Date[] => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
  };

  const weekDates = getWeekDates(referenceMonday);
  const start = weekDates[0].toISOString().slice(0, 10);
  const end = weekDates[6].toISOString().slice(0, 10);

  // Fetch class data from the API
  useEffect(() => {
    fetch(`/api/timetable?start=${start}&end=${end}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [start, end]);

  // Fetch booking data from the API
  useEffect(() => {
    fetch(`/api/booking`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  // Update the number of days to show based on screen size
  useEffect(() => {
    const updateDaysToShow = () => {
      const isTablet = globalThis.matchMedia("(max-width: 1024px)").matches;
      const isMobile = globalThis.matchMedia("(max-width: 640px)").matches;
      if (isMobile) {
        setDaysToShow(2);
      } else if (isTablet) {
        setDaysToShow(4);
      } else {
        setDaysToShow(7);
      }
    };
    updateDaysToShow();
    globalThis.addEventListener("resize", updateDaysToShow);
    return () => {
      globalThis.removeEventListener("resize", updateDaysToShow);
    };
  }, []);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("et-EE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  // Get the visible dates based on the number of days to show
  const visibleDates = weekDates.slice(0, daysToShow);

  function isClassDisabled(classItem: ClassDay, isFull: boolean) {
    if (isFull) return true;
    const classDate = new Date(classItem.date);
    const todayNormalized = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const classDateNormalized = new Date(
      classDate.getFullYear(),
      classDate.getMonth(),
      classDate.getDate(),
    );

    if (classDateNormalized.getTime() < todayNormalized.getTime()) return true;

    if (
      classDateNormalized.getTime() === todayNormalized.getTime() &&
      today.getHours() >= parseInt(classItem.start_time.slice(0, 2))
    ) {
      return true;
    }
    return false;
  }

  // Get unique time slots from the classes data based on the visible dates
  const timeSlots = Array.from(
    new Set(
      filteredClasses
        .filter((c) =>
          visibleDates.some((date) => isSameDay(new Date(c.date), date))
        )
        .map((c) => c.start_time),
    ),
  ).sort((a, b) => a.localeCompare(b));

  return (
    <div class="max-w-6xl mx-auto mb-20">
      {/* ----------------Header for timetable---------------- */}
      <div className="flex flex-col justify-between items-center mb-4">
        <div className="flex items-center py-4 justify-center flex-1">
          <button
            type="button"
            class="px-2 py-1 "
            aria-label="Eelmine nädal"
            onClick={() => {
              const prev = new Date(referenceMonday);
              prev.setDate(prev.getDate() - daysToShow);
              setReferenceMonday(prev);
            }}
          >
            <svg
              class="w-[24px] h-[24px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          <h2 class="text-xl font-bold text-center px-4">
            {formatDate(weekDates[0])} – {formatDate(weekDates[daysToShow - 1])}
          </h2>
          <button
            type="button"
            class="px-2 py-1"
            aria-label="Järgmine nädal"
            onClick={() => {
              const next = new Date(referenceMonday);
              next.setDate(next.getDate() + daysToShow);
              setReferenceMonday(next);
            }}
          >
            <svg
              className="w-[24px] h-[24px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* ----------------Timetable filter---------------- */}
        <div className="flex flex-col items-center">
          <p>Filtreeri tüübi järgi</p>
          <form method="GET">
            <select
              name="type"
              value={typeFilter}
              aria-label="Filtreeri tüübi järgi"
              onChange={(e) => {
                setTypeFilter(e.currentTarget.value);
              }}
            >
              <option value="Kõik">Kõik</option>
              <option value="Tund">Tunnid</option>
              <option value="Üritus">Üritused</option>
            </select>
          </form>
        </div>
        <div className="flex flex-col items-center mt-4">
          <p>Otsi tunni järgi</p>
          <form method="GET">
            <select
              name="class"
              value={classFilter}
              aria-label="Filtreeri klassi järgi"
              className="w-32"
              onChange={(e) => {
                setClassFilter(e.currentTarget.value);
              }}
            >
              <option value="Kõik">Kõik</option>
              {classes.map((c) => (
                <option key={c.id} value={c.classname}>
                  {c.classname}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>

      {/* ----------------Header for timetable to show the current timespan---------------- */}
      <div class="w-full bg-white rounded-2xl">
        <table class="w-full border-separate border-spacing-0 table-fixed text-sm rounded-2xl border border-gray-300 overflow-hidden">
          <thead>
            <tr>
              {weekDates.slice(0, daysToShow).map((date, i) => {
                const weekday = date.toLocaleDateString("et-EE", {
                  weekday: "long",
                });
                const weekdayMobile = date.toLocaleDateString("et-EE", {
                  weekday: "short",
                });
                const day = date.getDate();
                return (
                  <th key={i} class="p-4 bg-[#222225] text-white text-center">
                    <div class="hidden lg:block">
                      {weekday.charAt(0).toUpperCase() + weekday.slice(1)}
                    </div>
                    <div class="block lg:hidden">
                      {weekdayMobile.charAt(0).toUpperCase() +
                        weekdayMobile.slice(1)}
                    </div>
                    {day}
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* ----------------Populate the timetable---------------- */}
          <tbody>
            {timeSlots.map((slot, i) => (
              <tr key={i}>
                {weekDates.slice(0, daysToShow).map((date, j) => {
                  const matchedClass = filteredClasses.find(
                    (c) =>
                      c.start_time === slot &&
                      isSameDay(new Date(c.date), date),
                  );
                  return (
                    <td
                      key={j}
                      className="border border-gray-300 p-2 text-center align-top bg-[#FFFFF0]"
                    >
                      {matchedClass && (
                        <>
                          <div>
                            {matchedClass.start_time.slice(0, 5)} -{" "}
                            {matchedClass.end_time.slice(0, 5)}
                            <br />
                            <strong>{matchedClass.classname}</strong>
                            <br />
                            {matchedClass.price} {"€"}
                          </div>

                          {/* ----------------Logic for button to disable if fully booked or past date---------------- */}
                          {(() => {
                            const currentBookings = bookings.filter((b) =>
                              b.timetable_id === matchedClass.id
                            ).length;
                            const isFull =
                              currentBookings >= matchedClass.max_bookings;
                            const disabled = isClassDisabled(
                              matchedClass,
                              isFull,
                            );

                            return (
                              <div class="text-xs mt-1">
                                {currentBookings}/{matchedClass.max_bookings}
                                {" "}
                                broneeringut
                                {isFull && (
                                  <span class="text-red-600 ml-1">(Täis)</span>
                                )}
                                <br />
                                {!disabled && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setSelectedClass(matchedClass)}
                                    className="mt-1 text-xs text-gray-900 px-5 py-2 rounded-3xl border border-gray-900 delay-50 duration-300 ease-in hover:scale-105"
                                  >
                                    Registreeri
                                  </button>
                                )}
                              </div>
                            );
                          })()}
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ----------------Modal for booking form---------------- */}
      {selectedClass && (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-[#FFFFF0] p-6 rounded shadow-md max-w-md w-full relative">
            <div class="flex justify-between items-center">
              <h2 className="text-xl font-bold">Registreeri tundi</h2>
              <button
                class="text-gray-800 hover:text-black"
                onClick={() => setSelectedClass(null)}
              >
                <svg
                  className="w-[24px] h-[24px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <hr className="h-px my-4 bg-gray-500 border-0" />
            <div class="flex flex-col items-center justify-center mb-4">
              {errorMessage && (
                <div class="text-red-500 text-center mb-2">{errorMessage}</div>
              )}
              <p class="mb-2 text-center">
                <strong>{selectedClass.classname}</strong> —{" "}
                {selectedClass.instructor}
              </p>
              <p class="mb-2 text-center">
                {new Date(selectedClass.date).toLocaleDateString()} <br />
                {selectedClass.start_time.slice(0, 5)} -{" "}
                {selectedClass.end_time.slice(0, 5)}
              </p>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);

                const payload = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  timetable_id: selectedClass.id,
                };

                const res = await fetch("/api/booking", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });

                if (res.ok) {
                  alert("Registreerimine õnnestus!");
                  setSelectedClass(null);
                  setErrorMessage(null);
                } else {
                  const errorText = await res.json();
                  setErrorMessage(errorText.message || "Midagi läks valesti");
                }
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Ees- ja perekonnanimi"
                required
                class="w-full p-2 border border-gray-900 rounded-2xl mb-2 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                class="w-full p-2 border border-gray-900 rounded-2xl bg-transparent"
              />
              <hr className="h-px my-6 bg-gray-500 border-0" />
              <button
                type="submit"
                className="mt-1 text-xs text-gray-900 px-5 py-3 rounded-3xl border border-gray-900 flex items-center justify-center w-full
                                transition delay-150 duration-300 ease-in hover:scale-105"
              >
                Kinnita registreerimine
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
