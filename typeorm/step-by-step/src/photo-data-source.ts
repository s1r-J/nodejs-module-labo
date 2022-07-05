import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"
import { Author } from "./entity/Author"
import { Album } from "./entity/Album"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "photo-database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Photo, PhotoMetadata, Author, Album, ],
    migrations: [],
    subscribers: [],
})
