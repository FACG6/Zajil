BEGIN;

    DROP TABLE IF EXISTS users, items, orders, places, TUsers;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
        role TEXT NOT NULL,
        user_name TEXT NOT NULL,
        password TEXT NOT NULL
    );

    CREATE TABLE items
    (
        pk_i_id SERIAL PRIMARY KEY,
        s_name TEXT NOT NULL,
        fk_i_order_id INTEGER REFERENCES users (id),
        dt_modified_date DATE,
        dt_create_at DATE DEFAULT current_date,
        dt_delete_at DATE

    );

    CREATE TABLE places
    (
        pk_i_id SERIAL PRIMARY KEY,
        s_name TEXT NOT NULL,
        d_latitude FLOAT,
        d_longitude FLOAT
    );

    COMMIT;