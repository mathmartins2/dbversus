import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entity/message.entity';
import { User } from './entity/user.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(content: string, name: string) {
    const user = await this.userRepository.save({
      name,
    });
    return await this.messageRepository.save({
      content,
      userId: user.id,
    });
  }

  async query() {
    return await this.messageRepository
      .createQueryBuilder('message')
      .innerJoin('message.user', 'user')
      .addSelect('user.id', 'userId')
      .getMany();
  }
}
