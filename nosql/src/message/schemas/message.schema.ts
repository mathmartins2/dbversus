import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({
    required: true,
  })
  content: string;

  @Prop({
    default: new Date(),
  })
  timestamp: Date;

  @Prop({
    required: true,
    type: 'string',
    index: true,
  })
  userId: ObjectId;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
