# Nova Tervise Stuudio
Nova Tervise Stuudio is a website for a yoga studio in Rakvere, Estonia.

This website was created by Kevin Alak, for his bachelor's thesis at the Univerity of Tartu in 2025.
The website was built using Deno Fresh, Deno 2, Tailwind CSS and Supabase.

### Usage

1. Clone the repository and open it in JetBrains Webstorm IDE.
2. Make sure to install Deno: https://deno.land/manual/getting_started/installation
3. Set up Supabase.
   - Create a Supabase account and a new project.
   - Create a new table called `users` with the following columns:
     - `id`: UUID, primary key references `auth.users` id on delete cascade
     - `first_name`: text, not null
     - `last_name`: text, not null
     - `email`: text, not null, unique
     - `role`: text, not null
     - `created_at`: timestamp with time zone, default now()
   - Create a new table called `timetable` with the following columns:
     - `id`: Serial, primary key
     - `instructor`: text, not null
     - `classname`: text, not null
     - `date`: date, not null
     - `start_time`: time, not null
     - `end_time`: time, not null
     - `max_bookings`: integer, not null
     - `price`: integer, not null
     - `type`: text, not null
   - Create a new table called `booking` with the following columns:
     - `id`: Serial, primary key
     - `name`: text, not null
     - `email`: text, not null
     - `timetable_id`: integer, references `timetable` id on delete cascade
4. Create a `.env` file in the root directory and add the following environment variables:

```
SUPABASE_URL
SUPABASE_ANON_KEY
```
Build the project:

```
deno task build
```
Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
5. Open your browser and go to `http://localhost:8000` to see the website in action.
