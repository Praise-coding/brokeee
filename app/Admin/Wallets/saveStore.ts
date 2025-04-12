"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function saveSocialMedia(data: FieldValues, id: number) {
    try {
        await mysqlConnection.execute("update WalletType set walletType = ? where id = ?", [data?.["walletName"], id])

        return {ok: true}
    } catch {
        return {ok: false}
    }
}