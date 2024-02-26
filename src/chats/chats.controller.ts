import { Controller, Get, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatService: ChatsService) {}
  @Get('count')
  @UseGuards(JwtAuthGuard)
  async countChats() {
    return this.chatService.countChats();
  }
}
