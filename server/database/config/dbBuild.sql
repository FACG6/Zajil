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

    CREATE TABLE orders
    (
        pk_i_id SERIAL PRIMARY KEY,
        fk_i_customer_id INTEGER REFERENCES TUser(pk_i_id),
        fk_i_captain_id INTEGER REFERENCES TUser(pk_i_id),
        fk_i_place_id INTEGER REFERENCES places(pk_i_id),
        s_customer_address TEXT NOT NULL,
        s_customer_phone TEXT NOT NULL,
        dt_create_at DATE DEFAULT current_date,
        dt_delete_at DATE,
        dt_modified_date DATE
    );

    CREATE TABLE TUser
    (
        pk_i_id SERIAL PRIMARY KEY,
        s_name TEXT NOT NULL,
        s_mobile_number TEXT NOT NULL,
        s_email TEXT NOT NULL,
        s_address TEXT NOT NULL,
        s_access_token TEXT,
        s_image TEXT NOT NULL,
        d_latitude FLOAT,
        d_longitude FLOAT,
        i_type INTEGER NOT NULL,
        d_rate FLOAT,
        b_online BOOLEAN,
        b_active BOOLEAN,
        dt_modified_date DATE,
        dt_create_at DATE DEFAULT current_date,
        dt_delete_at DATE,
        s_password TEXT NOT NULL,
        s_id_number INTEGER,
        s_attachment TEXT,
        s_driver_licence_number INTEGER,
        s_extra_1 TEXT,
        s_extra_2 TEXT
    );

    COMMIT;