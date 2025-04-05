"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function saveStore(data: FieldValues, id: number) {
    try {
        await mysqlConnection.execute("update CryptoStores set storeName = ?, storeUrl = ? where id = ?", [data?.["Store"], data?.["StoreUrl"], id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}