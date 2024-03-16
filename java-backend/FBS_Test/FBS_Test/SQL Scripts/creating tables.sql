DROP SCHEMA IF EXISTS `flight-booking-system`;

CREATE SCHEMA `flight-booking-system`;

use `flight-booking-system`;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE `user_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `authority` varchar(50) DEFAULT "USER",
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;




CREATE TABLE Flight_Details (

    flight_id INT AUTO_INCREMENT PRIMARY KEY,
    flight_name VARCHAR(100),
    model VARCHAR(50),
    economy_class_seats INT,
    first_class_seats INT,
    business_class_seats INT
);

CREATE TABLE Flight_Schedule (
	schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    flight_id INT,
    source_location VARCHAR(100),
    destination_location VARCHAR(100),
    departure_time DATETIME,
    arrival_time DATETIME,
    economy_class_price DECIMAL(10, 2),
    first_class_price DECIMAL(10, 2),
    business_class_price DECIMAL(10, 2),
    FOREIGN KEY (flight_id) REFERENCES Flight_Details(flight_id)
);


CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    flight_id INT,
    id INT,
    schedule_id INT,
    passenger_name VARCHAR(100),
    passenger_email VARCHAR(100),
    passenger_phone VARCHAR(20),
    passenger_gender VARCHAR(10),
    ticket_price DECIMAL,
    passenger_age INT,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (flight_id) REFERENCES Flight_Details(flight_id),
    FOREIGN KEY (schedule_id) REFERENCES Flight_Schedule(schedule_id),
    FOREIGN KEY (id) REFERENCES user_detail(id)
);

