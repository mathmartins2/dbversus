import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    default: new Date(),
  })
  timestamp: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
