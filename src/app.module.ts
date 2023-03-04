import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Poll } from './poll/poll.entity';
import { PollModule } from './poll/poll.module';
import { Vote } from './vote/vote.entity';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    entities: [Poll,Vote],
    logging: true,
    synchronize: true,
  }),
  PollModule,
  VoteModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
