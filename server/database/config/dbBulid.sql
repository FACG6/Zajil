BEGIN;

    DROP TABLE IF EXISTS users, items, orders, places, TUsers;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
        role TEXT NOT NULL,
        user_name TEXT NOT NULL,
        password TEXT NOT NULL
    );

    COMMIT;