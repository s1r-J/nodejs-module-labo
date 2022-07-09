import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    synchronize: true,
    logging: false,
    entities: [ User ],
    migrations: [],
    subscribers: [],
    database: "database.sqlite",
})
