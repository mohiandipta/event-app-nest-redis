import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepo: Repository<Event>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAllEvent() {
    return await this.eventRepo.find()
  }

  async getEventById(id: string): Promise<Event> {
    const cachedEvent = await this.cacheManager.get<Event>(`event:${id}`);
    console.log('Cache hit:', cachedEvent);
    if (cachedEvent) {
      return cachedEvent
    }

    const event = await this.eventRepo.findOne({ where: { id } });
    if (!event) {
      throw new BadRequestException('Event not found');
    }

    await this.cacheManager.set(`event:${id}`, event)
    return event;
  }

  async filterEventsByDate(date?: Date): Promise<Event[]> {
    if (date) {
      return this.eventRepo.find({ where: { date: date } });
    }
    return this.eventRepo.find();
  }

  async create(createEventDto: CreateEventDto) {
    try {
      const overlappingEvent = await this.eventRepo.findOne({ where: { date: createEventDto.date } });
      if (overlappingEvent) {
        throw new BadRequestException('An event already exists on this date.');
      }
  
      const event = this.eventRepo.create(createEventDto);
      const createdEvent = await this.eventRepo.save(event);

      await this.clearEventCache(createdEvent.id);
      return createdEvent
    } catch (error) {
      throw error
    }
  }

  async clearEventCache(eventId: string) {
    await this.cacheManager.del(`event:${eventId}`);
    await this.cacheManager.del(`attendees:event:${eventId}`);
  }
}
