import { Module, forwardRef } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { ChatsRepository } from './chats.repository';
import { Chat, ChatSchema } from './entities/chat.entity';
import { DatbaseModule } from 'src/common/database/database.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    DatbaseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    forwardRef(() => MessagesModule),
  ],
  providers: [ChatsResolver, ChatsService, ChatsRepository],
  exports: [ChatsService, ChatsRepository],
})
export class ChatsModule {}
