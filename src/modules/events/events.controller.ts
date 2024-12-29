import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getAllEvents() {
    return this.eventsService.getAllEvent()
  }

  @Get(':id')
  async getEventById(@Param('id') id: string) {
    return this.eventsService.getEventById(id)
  }

  @Get('filter')
  async filterEventsByDate(@Query('date') date: string): Promise<Event[]> {
    if (date) {
      const parsedDate = new Date(date);
      if (parsedDate.toString() === 'Invalid Date') {
        throw new BadRequestException('Invalid date format')
      }
      return this.eventsService.filterEventsByDate(parsedDate)
    }
    return this.eventsService.filterEventsByDate()
  }

  @Post()
  async createEvent(@Body() dto: CreateEventDto) {
    return this.eventsService.create(dto)
  }
}
