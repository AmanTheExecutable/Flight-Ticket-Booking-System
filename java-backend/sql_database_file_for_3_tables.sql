-- DROP SCHEMA IF EXISTS `flight-booking-system-test`;

-- CREATE SCHEMA `flight-booking-system-test`;

-- use `flight-booking-system-test`;

-- SET FOREIGN_KEY_CHECKS = 0;

-- CREATE TABLE user_detail (
--   user_id int NOT NULL AUTO_INCREMENT,
--   name varchar(128) DEFAULT NULL,
--   email varchar(45) DEFAULT NULL,
--   password varchar(50) DEFAULT NULL,
--   authority varchar(50) DEFAULT "USER",
--   PRIMARY KEY (user_id)
-- );


-- CREATE TABLE flight_schedule (
-- 	schedule_id INT AUTO_INCREMENT PRIMARY KEY,
--     flight_id INT,
--     flight_model VARCHAR(15),
--     source VARCHAR(100),
--     destination VARCHAR(100),
--     departure_time DATETIME,
--     arrival_time DATETIME,
--     economy_class_price DECIMAL(10, 2),
--     first_class_price DECIMAL(10, 2),
--     business_class_price DECIMAL(10, 2),
--     economy_class_seats INT,
--     business_class_seats INT,
-- 	first_class_seats INT,
--     seats VARCHAR(200)
-- );

-- rop table bookings;-- 

-- CREATE TABLE bookings (
--     booking_id INT AUTO_INCREMENT PRIMARY KEY,
--     flight_id INT,
--     user_id INT,
--     schedule_id INT,
--     passenger_name VARCHAR(100),
--     passenger_email VARCHAR(100),
--     passenger_phone VARCHAR(20),
--     passenger_gender VARCHAR(10),
--     ticket_price DECIMAL,
--     passenger_age INT,
--     booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP

-- );

-- ALTER TABLE flight_schedule
-- ADD INDEX idx_flight_id (flight_id);

-- ALTER TABLE bookings
-- ADD CONSTRAINT
-- FOREIGN KEY (flight_id)
-- REFERENCES flight_schedule(flight_id);

-- ALTER TABLE bookings
-- ADD CONSTRAINT
-- FOREIGN KEY (user_id)
-- REFERENCES user_detail(user_id);

-- ALTER TABLE bookings
-- ADD CONSTRAINT
-- FOREIGN KEY (schedule_id)
-- REFERENCES flight_schedule(schedule_id); 
 
-- INSERT INTO user_detail (name, email, password, authority) VALUES
-- ('John Doe', 'john@example.com', 'password123', 'ADMIN'),
-- ('Alice Smith', 'alice@example.com', 'password456', 'USER'),
-- ('Bob Johnson', 'bob@example.com', 'password789', 'USER');

-- Sample values for flight_schedule table
-- INSERT INTO flight_schedule (flight_id, flight_model, source, destination, departure_time, arrival_time, economy_class_price, first_class_price, business_class_price, economy_class_seats, business_class_seats, first_class_seats, seats) VALUES
-- (1, 'Boeing 737', 'New York', 'Los Angeles', '2024-03-15 08:00:00', '2024-03-15 11:00:00', 200.00, 400.00, 600.00, 150, 50, 30, '000000000000000000'),
-- (2, 'Airbus A320', 'Los Angeles', 'Chicago', '2024-03-16 10:00:00', '2024-03-16 12:30:00', 180.00, 350.00, 550.00, 180, 60, 35, '000000000000000000'),
-- (3, 'Boeing 787', 'Chicago', 'Houston', '2024-03-17 12:00:00', '2024-03-17 14:30:00', 220.00, 450.00, 650.00, 200, 70, 40, '000000000000000000');

-- -- Sample values for bookings table
-- INSERT INTO bookings (flight_id, user_id, schedule_id, passenger_name, passenger_email, passenger_phone, passenger_gender, ticket_price, passenger_age) VALUES
-- (1, 1, 1, 'Alice Johnson', 'alice.j@example.com', '1234567890', 'Female', 200.00, 25),
-- (2, 2, 2, 'Bob Smith', 'bob.s@example.com', '9876543210', 'Male', 180.00, 30),
-- (3, 3, 3, 'Carol Williams', 'carol.w@example.com', '1112223333', 'Female', 220.00, 35);


