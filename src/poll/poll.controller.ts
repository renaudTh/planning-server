import { Body, Controller, Get, Post } from "@nestjs/common";
import { PollService } from "./poll.service";
import { Poll } from "./poll.entity";


@Controller('polls')
export class PollController {

    constructor(private readonly pollService: PollService){}

    @Get()
    findAll():Promise<Poll[]> {
        return this.pollService.findAll();
    }

    @Post()
    create(@Body() poll: Poll) : Promise<Poll>{
        return this.pollService.add(poll);
    }
}