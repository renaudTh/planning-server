import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Day{
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday"
}

export enum Presence {
    Office = "Office",
    Off = "Off",
    Remote = "Remote",
    Course = "Course"
}
@Entity()
export class Poll {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    week:number;
    @Column()
    year:number;
}