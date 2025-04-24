import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
    user: "postgres",
    password: "123",
    database: "nova",
    hostname: "localhost",
    port: 5432,
});

await client.connect();

await client.queryObject(`
CREATE TABLE IF NOT EXISTS timetable (
    id SERIAL PRIMARY KEY,
    instructor TEXT NOT NULL,
    className TEXT NOT NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL
                                    
    )
`);
await client.queryObject(`
    CREATE TABLE IF NOT EXISTS booking (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        timetable_id INTEGER REFERENCES timetable(id) ON DELETE CASCADE
                            
    )
`);
export default client;