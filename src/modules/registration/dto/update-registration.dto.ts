import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterAttendeeDto } from './create-registration.dto';

export class UpdateRegistrationDto extends PartialType(CreateRegisterAttendeeDto) {}
