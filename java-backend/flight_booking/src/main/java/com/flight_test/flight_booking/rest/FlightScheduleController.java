package com.flight_test.flight_booking.rest;

import com.flight_test.flight_booking.entity.BookingDetails;
import com.flight_test.flight_booking.entity.FlightSchedule;
import com.flight_test.flight_booking.service.FlightScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-1")
public class FlightScheduleController {
    private FlightScheduleService flightScheduleService;

    @Autowired
    public FlightScheduleController(FlightScheduleService flightScheduleService) {
        this.flightScheduleService = flightScheduleService;
    }

    @PostMapping("/schedule")
    public FlightSchedule addFlightSchedule(@RequestBody FlightSchedule flightSchedule) {
        flightSchedule.setScheduleId(0);
        FlightSchedule newFlightSchedule = flightScheduleService.addFlightSchedule(flightSchedule);
        return newFlightSchedule;
    }

    @PutMapping("/schedule")
    public FlightSchedule updateSchedule(@RequestBody FlightSchedule flightSchedule) {
        return flightScheduleService.addFlightSchedule(flightSchedule);
    }

    @DeleteMapping("/schedule/{id}")
    public FlightSchedule deleteSchedule(@PathVariable int id) {
        return flightScheduleService.deleteSchedule(id);
    }


}
