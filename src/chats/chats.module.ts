import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { ChatsRepository } from './chats.repository';
import { Chat, ChatSchema } from './entities/chat.entity';
import { DatbaseModule } from 'src/common/database/database.module';

@Module({
  imports: [
    DatbaseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  providers: [ChatsResolver, ChatsService, ChatsRepository],
  exports: [ChatsService],
})
export class ChatsModule {}
