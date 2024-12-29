import { Entity, Unique, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('attendees')
@Unique(['email'])
export class Attendee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;
}
