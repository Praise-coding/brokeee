"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function addDeposit(data: FieldValues) {
    try {
        await mysqlConnection.execute("insert into DepositAddresses(name, address) values (?, ?)", [data?.["Crypto"], data?.["Address"]])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}