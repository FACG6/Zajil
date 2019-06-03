BEGIN;

    INSERT INTO users
        (user_name, password, role)
    VALUES('admin', '$2a$05$WRLE5TPY4ppszWklRiX0m.kjyX8uMtZ76O9lt8y8zXilM.vl/5hjS', 'admin');
    -- for TUser information 1 captain , 2 customer
    INSERT INTO TUser
        (s_name, s_mobile_number, s_email, b_status, s_address, s_image, i_type, s_password)
    VALUES
        ('نور عماد نور', '+970599999999', 'test1@hotmail.com', true, 'gaza', 'test.png', 2, '123'),
        ('أنور عماد نور', '+970599999999', 'test2@hotmail.com', true, 'khanyouns', 'test.png', 2, '123'),
        ('منور عماد نور', '+970599999999', 'test3@hotmail.com', true, 'rafah', 'test.png', 2, '123'),
        ('فنور عماد نور', '+970599999999', 'test4@hotmail.com', false, 'gaza', 'test.png', 2, '123'),
        ('سنور عماد نور', '+970599999999', 'test5@hotmail.com', true, 'dear albalah', 'test.png', 2, '123'),
        ('احمد محمد محمود', '+970599999999', 'test6@hotmail.com', true, 'gaza', 'test.png', 1, '123');

    INSERT INTO places
        (s_name)
    VALUES
        ('مكان 1'),
        ('مكان 2'),
        ('مكان 3'),
        ('مكان 4'),
        ('مكان 5'),
        ('مكان 6');

    INSERT INTO orders
        (fk_i_place_id, s_customer_address, s_customer_phone)
    VALUES
        (1, 'gaza', '+970599999999'),
        (2, 'gaza', '+970599999999'),
        (3, 'gaza', '+970599999999'),
        (1, 'gaza', '+970599999999'),
        (5, 'gaza', '+970599999999');

    COMMIT;