import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column({
    default: new Date(),
  })
  timestamp: Date;

  @Column()
  @Index()
  userId: string;

  @ManyToOne(() => User, (user) => user.messages)
  user: User;
}
