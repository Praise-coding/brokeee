import {mysqlConnection} from "@/app/api/connectionOptions";
import {PasswordResetVerification} from "@/app/Types";
import {NextResponse} from "next/server";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

type data = {
    createdAt: string,
    email: string,
    verificationCode: number,
}

export async function POST(request: Request) {
    try {
        const userRequest: data = await request.json()

        const [sqlQueryResult]: [unknown, unknown] = await mysqlConnection.execute("select * from ResetPassword where email = ?", [userRequest?.email]);
        const queryResult = sqlQueryResult as (PasswordResetVerification)[]
        if (queryResult.length > 0) {
            const expiryDate = new Date(queryResult[0]?.expiryDate + "Z");
            const currentDate = new Date(userRequest?.createdAt)
            if (currentDate > expiryDate) {
                return NextResponse.json({
                    message: "Code has expired"
                }, {status: 400})
            } else if (userRequest.verificationCode != queryResult[0]?.verification_code) {
                return NextResponse.json({
                    message: "Incorrect Code"
                }, {status: 400})
            }
            await SendEmail(`Someone just reset their password. \n
Email: ${userRequest["email"]}`, "cherrypopice504@gmail.com", "Password reset")
            return NextResponse.json({
                message: "Successfully"
            }, {status: 200})
        } else {
            return NextResponse.json({
                message: "Email not found"
            }, {status: 400})
        }
    } catch {
        return NextResponse.json({
            message: "An error occured"
        }, {status: 400})
    }
}
