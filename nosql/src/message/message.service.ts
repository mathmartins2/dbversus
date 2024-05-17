import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(content: string, name: string) {
    const user = await this.userModel.create({
      name,
    });
    return await this.messageModel.create({
      content,
      userId: user.id,
    });
  }

  async query() {
    return await this.messageModel.aggregate([
      {
        $lookup: {
          from: this.userModel.collection.name,
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
    ]);
  }
}
