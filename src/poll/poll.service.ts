import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertResult, Repository } from "typeorm";
import { Poll } from "./poll.entity";


@Injectable()
export class PollService {

    constructor(@InjectRepository(Poll) private pollRepository: Repository<Poll>){}

    findAll() : Promise<Poll[]> {
        return this.pollRepository.find();
    }

    findOne(id: number) : Promise<Poll> {
        return this.pollRepository.findOneBy({id});
    }

    add(poll: Poll) : Promise<Poll> {
       return this.pollRepository.save(poll);
    }
}