import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vote } from './vote.entity';


@Injectable()
export class VoteService {

  constructor(@InjectRepository(Vote) private voteRepository: Repository<Vote>){}

  create(vote: Vote) :Promise<Vote> {
    return this.voteRepository.save(vote);
  }

  addWeekVote(votes: Vote[]):Promise<Vote[]>{
    return this.voteRepository.save(votes);
  }
  
  findAll(poll_id:number) {
    return this.voteRepository.find({where: {poll_id:poll_id}});
  }

  update(id: number, updateVoteDto: Vote) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
