
#to update 
START TRANSACTION;

UPDATE Flight_Details
SET flight_name = 'Flight2',
    model = 'AE232',
    economy_class_seats = 100,
    first_class_seats = 200,
    business_class_seats = 300
WHERE flight_id = 1;

UPDATE Flight_Schedule
SET source_location = 'New Source',
    destination_location = 'New Destination',
    departure_time = '2024-03-20 10:00:00',
    arrival_time = '2024-03-20 15:00:00',
    economy_class_price = 200.00,
    first_class_price = 400.00,
    business_class_price = 600.00
WHERE flight_id = 1;

COMMIT;