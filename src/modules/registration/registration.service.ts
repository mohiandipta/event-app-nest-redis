import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegisterAttendeeDto } from './dto/create-registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './entities/registration.entity';
import { Event } from '../events/entities/event.entity';
import { Attendee } from '../attendees/attendees/entities/attendee.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Event) private eventRepo: Repository<Event>,
    @InjectRepository(Attendee) private attendeeRepo: Repository<Attendee>,
    @InjectRepository(Registration) private registrationRepo: Repository<Registration>
  ) {}

  async getAllRegistration() {
    return await this.registrationRepo.find()
  }

  async getRegistrationById(id: string): Promise<Registration> {
    const reg = await this.registrationRepo.findOne({ where: { id } });
    if (!reg) {
      throw new BadRequestException('registration not found');
    }
    return reg;
  }

  async listRegistrationsForEvent(eventId: string): Promise<Registration[]> {
    const event = await this.eventRepo.findOne({ where: { id: eventId } });
    if (!event) {
      throw new BadRequestException('Event not found');
    }

    return this.registrationRepo.find({
      where: { event: { id: eventId } },
      relations: ['attendee'],
    });
  }

  async registerAttendee(dto: CreateRegisterAttendeeDto): Promise<Registration> {
    const event = await this.eventRepo.findOne({ where: { id: dto.eventId } });
    if (!event) {
      throw new BadRequestException('Event not found');
    }

    const attendee = await this.attendeeRepo.findOne({ where: { id: dto.attendeeId } });
    if (!attendee) {
      throw new BadRequestException('Attendee not found');
    }

    const existingRegistration = await this.registrationRepo.findOne({
      where: { event: { id: dto.eventId }, attendee: { id: dto.attendeeId } },
    });
    if (existingRegistration) {
      throw new BadRequestException('Attendee already registered for this event');
    }

    const registrationCount = await this.registrationRepo.count({ where: { event: { id: dto.eventId } } });
    if (registrationCount >= event.maxAttendees) {
      throw new BadRequestException('Event has reached maximum capacity');
    }

    const registration = this.registrationRepo.create({
      event,
      attendee,
    });
    return await this.registrationRepo.save(registration);
  }
}