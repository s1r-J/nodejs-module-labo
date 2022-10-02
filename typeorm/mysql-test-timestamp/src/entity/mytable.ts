import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Mytable {

    @PrimaryColumn()
    id: number;

    @Column({ name: 'created_at' })
    createdAt: Date
}
