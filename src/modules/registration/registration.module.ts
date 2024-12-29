import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../events/entities/event.entity';
import { Attendee } from '../attendees/attendees/entities/attendee.entity';
import { Registration } from './entities/registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attendee, Registration])],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
