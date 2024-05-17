import { Body, Controller, Post, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async create(@Body() body: { content: string; name: string }) {
    return await this.messageService.create(body.content, body.name);
  }

  @Get()
  async query() {
    return await this.messageService.query();
  }
}
