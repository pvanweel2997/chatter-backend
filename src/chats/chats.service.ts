import { Injectable } from '@nestjs/common';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { ChatsRepository } from './chats.repository';

@Injectable()
export class ChatsService {
  constructor(private chatsRepository: ChatsRepository) {}
  async create(createChatInput: CreateChatInput, userId: string) {
    return await this.chatsRepository.create({
      ...createChatInput,
      userId,
      userIds: createChatInput.userIds || [],
      messages: [],
    });
  }

  async findAll(userId: string) {
    return await this.chatsRepository.find({
      ...this.userChatFilter(userId),
    });
  }

  async findOne(_id: string) {
    return await this.chatsRepository.findOne({ _id });
  }

  update(id: number, updateChatInput: UpdateChatInput) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }

  userChatFilter(userId: string) {
    return {
      $or: [
        { userId },
        {
          userIds: {
            $in: [userId],
          },
        },
        { isPrivate: false },
      ],
    };
  }
}