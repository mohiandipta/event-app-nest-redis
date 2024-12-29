import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
import { Attendee } from './entities/attendee.entity';

@Controller('attendees')
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Get()
  async getAllAttendees() {
    return this.attendeesService.getAllAttendees()
  }

  @Get(':id')
  async getAttendeeById(@Param('id') id: string) {
    return this.attendeesService.getAttendeeById(id)
  }

  @Get('search')
  async searchAttendees(@Query('query') query: string): Promise<Attendee[]> {
    if (!query) {
      throw new BadRequestException('Query parameter is required');
    }
    return this.attendeesService.searchAttendees(query);
  }

  @Post()
  create(@Body() createAttendeeDto: CreateAttendeeDto) {
    return this.attendeesService.createAttendee(createAttendeeDto);
  }
}
