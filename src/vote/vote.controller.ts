import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { Vote } from './vote.entity';
import { VoteService } from './vote.service';


@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  addWeek(@Body() votes: Vote[]):Promise<Vote[]> {
    return this.voteService.addWeekVote(votes);
  }

  @Get(":id")
  find(@Param('id', ParseIntPipe) poll_id:number) {
    return this.voteService.findAll(poll_id);
  }
}
