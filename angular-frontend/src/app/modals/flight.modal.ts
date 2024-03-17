export interface Flight {
  id: number;
  company: string;
  source: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  arrivalDate: string;
  duration?: string; // Duration field is derived, so it's optional
  economy_class_price?: number; // Price for economy class
  first_class_price?: number; // Price for first class
  business_class_price?: number; // Price for business class
  economy_class_seats?: number; // Number of seats in economy class
  first_class_seats?: number; // Number of seats in first class
  business_class_seats?: number; // Number of seats in business class
}
