
"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function addSocial(data: FieldValues) {
    try {
        await mysqlConnection.execute("insert into WalletType(walletType) values (?)", [data?.["walletName"]])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}