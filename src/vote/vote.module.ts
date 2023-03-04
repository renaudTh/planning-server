import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Vote])],
  controllers: [VoteController],
  providers: [VoteService]
})
export class VoteModule {}
