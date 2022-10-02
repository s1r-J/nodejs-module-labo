import { Connection } from "typeorm"
import {Mytable} from "./entity/mytable";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export default async (connection: Connection) => {

    console.log("Inserting a new table into the database...");
    const table = new Mytable();
    table.id = Math.floor(Math.random() * 1000)
    table.createdAt = dayjs.tz(dayjs().toISOString(), 'Asia/Tokyo').toDate();
    await connection.manager.save(table);
    console.log("Saved a new table with id: " + table.id);

    console.log("Loading tables from the database...");
    const tables = await connection.manager.find(Mytable);
    console.log("Loaded tables: ", tables);

    const tables2 = await connection
        .createQueryBuilder()
        .select('mt.id')
        .select('DATE_FORMAT(mt.created_at, "%Y%m%d")', 'date') // sqlite throws error due to "SQLITE_ERROR: no such function: DATE_FORMAT"
        .from(Mytable, 'mt')
        .getRawMany()
    console.log("Loaded tables2: ", tables2);
};
