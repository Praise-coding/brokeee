import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

type data = {
    createdAt: string,
    email: string,
}

function addMinutes(date: Date, minutes: number) {
    const dateCopy = new Date(date);
    dateCopy.setMinutes(date.getMinutes() + minutes);
    return dateCopy;
}

export async function POST(request: Request) {
    try {
        const checkRequest: data = await request.json()
        const randomNumber = Math.floor(1000 + Math.random() * 9000) + 1;

        const createdDate = new Date(checkRequest.createdAt)
        const minAddedToCreatedTime = addMinutes(createdDate, 5)
        const expiryDate = minAddedToCreatedTime.toISOString().slice(0, 19).replace("T", " ");
        const [queryResults]: [unknown, unknown] = await mysqlConnection.execute("select * from User where email = ?", [checkRequest?.email])
        const emailExists = queryResults as []

        if (emailExists?.length > 0) {

            const [queryResults]: [unknown, unknown] = await mysqlConnection.execute("select * from ResetPassword where email = ?", [checkRequest?.email])
            const valueExists = queryResults as []
            const url = `http://localhost:3000/ResetPassword?Email=${checkRequest.email}&verificationCode=${randomNumber}`

            if (valueExists?.length > 0) {
                await mysqlConnection.execute("update ResetPassword set email= ?, verification_code= ?, createdAt= ?, expiryDate = ? where email = ?", [checkRequest?.email, randomNumber, createdDate.toISOString().slice(0, 19).replace("T", " "), expiryDate, checkRequest?.email])
            } else {
                await mysqlConnection.execute("insert into ResetPassword(email, verification_code, createdAt, expiryDate) values(?, ?, ?, ?)", [checkRequest?.email, randomNumber, createdDate.toISOString().slice(0, 19).replace("T", " "),
                    expiryDate
                ])
            }
            const emailSent = await SendEmail(`Click on the link to verify your email: ${url}`, checkRequest?.email, "Reset Password")

            if (!emailSent) {
                return NextResponse.json({message: "An error occured"}, {status: 400})
            }

        } else {

            return NextResponse.json({message: "Email does not belong to any user"}, {status: 400})
        }

    } catch (e) {
        throw e
    }

    return NextResponse.json({message: "a message"}, {status: 200})
}
