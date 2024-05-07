import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      autoLoadEntities: true,
      url: 'postgresql://example:example@localhost:5432/brook',
      synchronize: true,
    }),
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
