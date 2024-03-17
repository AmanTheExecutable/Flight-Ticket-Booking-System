#searching on the basis of date and source and destination
SELECT 
    fd.flight_id,
    fd.flight_name,
    fd.model,
    fs.source_location,
    fs.destination_location,
    fs.departure_time,
    fs.arrival_time,
    fs.economy_class_price,
    fs.first_class_price,
    fs.business_class_price
FROM 
    Flight_Details fd
JOIN 
    Flight_Schedule fs ON fd.flight_id = fs.flight_id
WHERE 
    fs.departure_time >= '2020-03-15' AND fs.departure_time < '2030-03-16'
    AND fs.source_location = 'punjab'
    AND fs.destination_location = 'bangalore';
