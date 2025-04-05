"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function addStore(data: FieldValues) {
    try {
        await mysqlConnection.execute("insert into CryptoStores(storeName, storeUrl) values (?, ?)", [data?.["Store"], data?.["StoreUrl"]])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}