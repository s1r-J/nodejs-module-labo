import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Relation, ManyToOne, ManyToMany } from "typeorm"
import { Album } from "./Album"
import { Author } from "./Author"
import { PhotoMetadata } from "./PhotoMetadata"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column("double")
    views: number

    @Column()
    isPublished: boolean

    @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
        cascade: true,
    })
    metadata: Relation<PhotoMetadata>

    // ManyToOneとOneToManyならばリレーションの所有者は決まっている
    // OneToOneやManyToManyではリレーションの所有者を定義するため、@JoinColumnや@JoinTableを使う
    @ManyToOne(() => Author, (author) => author.photos)
    author: Author

    @ManyToMany(() => Album, (album) => album.photos)
    albums: Album[]
}
