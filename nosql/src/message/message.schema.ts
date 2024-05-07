import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const MessageSchema = SchemaFactory.createForClass(Message);
