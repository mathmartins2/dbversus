import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    default: new Date(),
  })
  timestamp: Date;

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}
