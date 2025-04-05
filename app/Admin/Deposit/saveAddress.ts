"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";


export async function saveAddress(id: number, data: FieldValues) {
    try {
        await mysqlConnection.execute("update DepositAddresses set name = ?, address = ? where id = ?", [data?.["Crypto"], data?.["Address"], id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}