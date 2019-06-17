BEGIN;

INSERT INTO users(user_name, password, role) VALUES('admin', '$2a$05$WRLE5TPY4ppszWklRiX0m.kjyX8uMtZ76O9lt8y8zXilM.vl/5hjS', 'admin');

INSERT INTO places (s_name, d_latitude, d_longitude) VALUES ('Metro', '453.52', '821.851');

INSERT INTO orders (fk_i_place_id, s_customer_address,  s_customer_phone) VALUES ('1', 'غزة-الرمال', '00972598888888');

COMMIT;