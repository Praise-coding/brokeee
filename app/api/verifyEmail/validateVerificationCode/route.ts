import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {auth} from "@/app/api/auth/lib/authOption";
import {User, UserVerification} from "@/app/Types";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

export async function POST(request: Request) {
    try {
        const userRequest = await request.json()
        const user = (await auth())?.user.UserInfo
        const [sqlQueryResult]: [unknown, unknown] = await mysqlConnection.execute("select * from UserVerification join User on User.userid = UserVerification.userid where User.userid = ?", [user?.userid]);
        const queryResult = sqlQueryResult as (UserVerification & User)[]
        const expiryDate = new Date(queryResult[0]?.expiryDate + "Z");
        const currentDate = new Date(userRequest?.createdAt)
        if (currentDate > expiryDate) {
            return NextResponse.json({
                message: "Code has expired"
            }, {status: 400})
        } else if (userRequest.data != queryResult[0]?.verification_code) {
            return NextResponse.json({
                message: "Incorrect Code"
            }, {status: 400})
        }
        await mysqlConnection.execute("update User set emailVerified = ? where userid = ? ", ["verified", user?.userid])
        await mysqlConnection.execute("delete from UserVerification where userid = ?", [user?.userid])
        await SendEmail(`Someone just verified their email. \n
Email: ${user?.["Email"]}`, "okormorupraisecode@gmail.com", "Email verified")
        return NextResponse.json({
            message: "Successfully"
        }, {status: 200})
    } catch
        (e) {
        throw e
    }
}