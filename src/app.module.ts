import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Poll } from './poll/poll.entity';
import { PollModule } from './poll/poll.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    entities: [Poll],
    logging: true,
    synchronize: true,
  }),
  PollModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
