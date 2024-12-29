import { Attendee } from "src/modules/attendees/attendees/entities/attendee.entity";
import { Event } from "src/modules/events/entities/event.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('registrations')
export class Registration {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Event, { eager: true })
    @JoinColumn({ name: 'event_id' })
    event: Event;
  
    @ManyToOne(() => Attendee, { eager: true })
    @JoinColumn({ name: 'attendee_id' })
    attendee: Attendee;
  
    @CreateDateColumn({ type: 'timestamp' })
    registeredAt: Date;
}
