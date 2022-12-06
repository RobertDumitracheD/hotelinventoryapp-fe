import { generate } from "rxjs";

export interface Room {
    totalRooms: number;
    availableRooms?: number;
    bookedRooms: number;
}

export interface RoomsList {
    roomNumber?: number;
    roomType: string;
    roomPrice: number;
    amenities: String;
    checkInTime?: Date;
    checkOutTime?: Date;
    rating: number;
}