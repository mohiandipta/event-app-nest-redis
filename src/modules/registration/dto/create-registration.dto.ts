import { IsUUID } from "class-validator";

export class CreateRegisterAttendeeDto {
    @IsUUID()
    eventId: string;
  
    @IsUUID()
    attendeeId: string;
  }