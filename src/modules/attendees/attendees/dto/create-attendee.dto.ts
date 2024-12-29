import { IsEmail, IsString } from "class-validator";

export class CreateAttendeeDto {
    @IsString()
    name: string;
  
    @IsEmail()
    email: string;
  }