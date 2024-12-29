import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Like, Repository } from 'typeorm';
import { Attendee } from './entities/attendee.entity';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectRepository(Attendee) private attendeeRepo: Repository<Attendee>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAllAttendees() {
      return await this.attendeeRepo.find()
    }
  
  async getAttendeeById(id: string): Promise<Attendee> {
    const reg = await this.attendeeRepo.findOne({ where: { id } });
    if (!reg) {
      throw new BadRequestException('Attendee not found');
    }
    return reg;
  }

  async getAttendeesForEvent(eventId: string): Promise<Attendee[]> {
    const cachedAttendees = await this.cacheManager.get<Attendee[]>(`attendees:event:${eventId}`);
    if (cachedAttendees) {
      return cachedAttendees; 
    }

    const attendees = await this.attendeeRepo
      .createQueryBuilder('attendee')
      .leftJoin('attendee.registrations', 'registration')
      .where('registration.eventId = :eventId', { eventId })
      .getMany();

    await this.cacheManager.set(`attendees:event:${eventId}`, attendees)
    return attendees;
  }

  async createAttendee(dto: CreateAttendeeDto): Promise<Attendee> {
    const existingAttendee = await this.attendeeRepo.findOne({
      where: { email: dto.email },
    });
    if (existingAttendee) {
      throw new BadRequestException('Attendee with this email already exists');
    }

    const attendee = this.attendeeRepo.create(dto);
    return await this.attendeeRepo.save(attendee);
  }

  async searchAttendees(query: string): Promise<Attendee[]> {
    if (!query) {
      throw new BadRequestException('Query parameter is required');
    }

    // Find attendees by matching name or email
    return this.attendeeRepo.find({
      where: [
        { name: Like(`%${query}%`) },
        { email: Like(`%${query}%`) },
      ],
    });
  }
}
