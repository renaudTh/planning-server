import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { PollService } from "./poll.service";
import { Poll } from "./poll.entity";
import { DeleteResult } from "typeorm";


@Controller('polls')
export class PollController {

    constructor(private readonly pollService: PollService){}

    @Get()
    findAll():Promise<Poll[]> {
        return this.pollService.findAll();
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number): Promise<Poll>{
        return this.pollService.findOne(id);
    }
    @Post()
    create(@Body() poll: Poll) : Promise<Poll>{
        return this.pollService.add(poll);
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number): Promise<DeleteResult>{
        return this.pollService.remove(id);
    }
}