import { InputType, Int, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateChatInput {
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsString()
  name: string;
}
