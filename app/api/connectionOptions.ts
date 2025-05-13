import {ConnectionOptions} from "mysql2";
import mysql, {Connection} from "mysql2/promise";

const connectionOption: ConnectionOptions = {
    // host: 'mysql.railway.internal',
    // user: "root",
    // database: "railway",
    // password:"TbvVOsIbqZxLSJRFTLGyocBmCcBstysf",
    // port: 3306,
    uri:"mysql://root:TbvVOsIbqZxLSJRFTLGyocBmCcBstysf@centerbeam.proxy.rlwy.net:10530/railway",
    waitForConnections: true,
    connectionLimit: 10, // tweak this
    queueLimit: 0
}

export const mysqlConnection: Connection = mysql.createPool(connectionOption)