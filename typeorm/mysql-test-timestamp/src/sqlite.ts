import "reflect-metadata";
import {createConnection} from "typeorm";
import query from './query'

createConnection({
    type: 'sqlite',
    database: ':memory:',
    logging: false,
    dropSchema: true,
    synchronize: true,
    entities: [
        "src/entity/**/*.ts"
    ],
}).then((connection) => query(connection)).catch(error => console.log(error));
