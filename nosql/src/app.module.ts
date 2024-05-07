import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
    MessageModule,
  ],
})
export class AppModule {}
