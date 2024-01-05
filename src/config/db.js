import mysql from "mysql2/promise";

export const connection = await mysql.createConnection({
    host :'mysqlDB',
    user:'root',
    database :'prueba',
    password:'123456789',
    port:3306
})  