import "reflect-metadata";
import {createConnection} from "typeorm";
import query from './query'

createConnection()
    .then((connection) => query(connection))
    .catch(error => console.log(error));
