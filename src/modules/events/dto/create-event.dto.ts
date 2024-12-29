import { IsString, IsOptional, IsDate, IsInt, Min } from "class-validator";
import { Transform } from 'class-transformer';
import * as moment from 'moment'; 

export class CreateEventDto {
    @IsString()
    name: string;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsDate()
    @Transform(({ value }) => {
      const parsedDate = moment(value, 'DD-MM-YYYY');
      if (!parsedDate.isValid()) {
        throw new Error('Invalid date format');
      }
      return parsedDate.toDate();  // Transform into Date object
    })
    date: Date;
  
    @IsOptional()
    @IsString()
    location?: string;
  
    @IsInt()
    @Min(1, { message: 'maxAttendees must be a positive integer' })
    maxAttendees: number;
  }