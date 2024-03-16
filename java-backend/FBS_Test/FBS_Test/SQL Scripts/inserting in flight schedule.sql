# add value to flight schedule
INSERT INTO Flight_Schedule (flight_id, source_location, destination_location, departure_time, arrival_time, economy_class_price, first_class_price, business_class_price)
VALUES (
    (SELECT flight_id FROM Flight_Details WHERE flight_name = 'Flight4'), 
    'punjab', 
    'Bangalore', 
    '2024-03-20 08:00:00', 
    '2024-03-20 10:00:00', 
    200.00, 
    400.00, 
    600.00
);



