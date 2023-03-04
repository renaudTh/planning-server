import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PollController } from "./poll.controller";
import { Poll } from "./poll.entity";
import { PollService } from "./poll.service";


@Module({
    imports:[TypeOrmModule.forFeature([Poll])],
    providers: [PollService],
    controllers: [PollController]
})
export class PollModule {}