import { createConnection } from "mysql2/promise";

export const connection = await createConnection({
    host :'localhost',
    user:'root',
    database :'prueba',
    password:'123456789'
})