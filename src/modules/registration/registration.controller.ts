import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegisterAttendeeDto } from './dto/create-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get()
  async getAllRegistration() {
    return this.registrationService.getAllRegistration()
  }

  @Get(':id')
  async getRegistrationById(@Param('id') id: string) {
    return this.registrationService.getRegistrationById(id)
  }

  @Get('event/:eventId')
  async listRegistrationsForEvent(@Param('eventId') eventId: string) {
    return this.registrationService.listRegistrationsForEvent(eventId);
  }

  @Post()
  create(@Body() createRegistrationDto: CreateRegisterAttendeeDto) {
    return this.registrationService.registerAttendee(createRegistrationDto);
  }
}
