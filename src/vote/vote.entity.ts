import { type } from "os";
import { Poll } from "src/poll/poll.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Vote {

    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(() => Poll, (poll) => poll.id)
    poll_id: number;
    @Column()
    name:string;
    @Column()
    day: string
    @Column()
    am: string
    @Column()
    pm: string
}
