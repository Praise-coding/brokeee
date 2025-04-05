import {NextResponse} from "next/server";
import {auth} from "@/app/api/auth/lib/authOption";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

type data = {
    createdAt: string
}

function addMinutes(date: Date, minutes: number) {
    const dateCopy = new Date(date);
    dateCopy.setMinutes(date.getMinutes() + minutes);
    return dateCopy;
}

export async function POST(request: Request) {
    try {
        const checkRequest: data = await request.json()
        const user = (await auth())?.user?.UserInfo
        const randomNumber = Math.floor(1000 + Math.random() * 9000) + 1;

        const createdDate = new Date(checkRequest.createdAt)
        const minAddedToCreatedTime = addMinutes(createdDate, 5)
        const expiryDate = minAddedToCreatedTime.toISOString().slice(0, 19).replace("T", " ");

        const [queryResults]: [unknown, unknown] = await mysqlConnection.execute("select * from UserVerification where userid = ?", [user?.userid])
        const valueExists = queryResults as []
        if (valueExists?.length > 0) {
            await mysqlConnection.execute("update UserVerification set email= ?, verification_code= ?, createdAt= ?, expiryDate = ? where userid = ?", [user?.Email, randomNumber, createdDate.toISOString().slice(0, 19).replace("T", " "), expiryDate, user?.userid])
        } else {
            await mysqlConnection.execute("insert into UserVerification(userid, email, verification_code, createdAt, expiryDate) values(?, ?, ?, ?, ?)", [user?.userid, user?.Email, randomNumber, createdDate.toISOString().slice(0, 19).replace("T", " ")
                ,
                expiryDate
            ])
        }

        if (user?.Email) {
            await SendEmail(`Verification code: ${randomNumber}`, user?.Email, "Verification your email")
        }
    } catch (e) {
        throw e
    }

    return NextResponse.json({message: "a message"}, {status: 200})
}