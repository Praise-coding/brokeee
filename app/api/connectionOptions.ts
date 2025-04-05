import {ConnectionOptions} from "mysql2";
import mysql, {Connection} from "mysql2/promise";

const connectionOption: ConnectionOptions = {
    uri: "mysql://root:MLYoRKsyFgdogKiChxilRWEyuuSASYhy@centerbeam.proxy.rlwy.net:12545/railway"
}

export const mysqlConnection: Connection = mysql.createPool(connectionOption)
