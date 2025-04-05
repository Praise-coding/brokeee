import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {auth} from "@/app/api/auth/lib/authOption";
import bcrypt from "bcryptjs";
import {hashPassword} from "@/app/api/encrypter";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

interface MysqlErrors extends Error {
    code?: string;
    errno?: number;
    sqlMessage?: string;
}

type passWord = {
    userPassword: string
}

export async function POST(request: Request) {
    try {
        const userRequest = await request.json();
        const user = (await auth())?.user.UserInfo
        const userId = user?.userid;

        if (!userId) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401});
        }

        if (userRequest.type === "personalInfo") {
            await mysqlConnection.execute(
                `UPDATE User
                 SET FirstName      = ?,
                     LastName       = ?,
                     Email          = ?,
                     PhoneNumber    = ?,
                     Country        = ?,
                     ProfilePicture = ?
                 WHERE userid = ?`,
                [
                    userRequest["First Name"],
                    userRequest["Last Name"],
                    userRequest["Email"],
                    userRequest["Phone number"],
                    userRequest["Country"],
                    userRequest["image"],
                    userId,
                ]
            );
            if (user?.Email != userRequest["Email"]) {
                await mysqlConnection.execute("update User set emailVerified = ? where userid = ?", ["unverified", userId])
            }
            await SendEmail(`Someone just updated their profile. \n
Email: ${user?.Email}`, "okormorupraisecode@gmail.com", "Updated Profile")
            return NextResponse.json({message: "Personal info updated successfully"}, {status: 200});
        }

        const [password]: [unknown, unknown] = await mysqlConnection.execute(
            "SELECT userPassword FROM User WHERE userid = ?",
            [userId]
        );
        const userPassword = password as passWord[]
        if (!userPassword?.length || !userPassword[0]?.userPassword) {
            return NextResponse.json({message: "User password not found"}, {status: 404});
        }

        const isPasswordCorrect = await bcrypt.compare(userRequest["Old Password"], userPassword[0].userPassword);

        if (!isPasswordCorrect) {
            return NextResponse.json({message: "Incorrect password"}, {status: 400});
        }

        const newPassword = await hashPassword(userRequest["New Password"]);

        await mysqlConnection.execute(
            "UPDATE User SET userPassword = ? WHERE userid = ?",
            [newPassword, userId]
        );
        await SendEmail(`Someone just updated their profile. \n
Email: ${user?.Email}`, "okormorupraisecode@gmail.com", "Updated Profile")
        return NextResponse.json({message: "Password updated successfully"}, {status: 200});

    } catch (e) {
        const error = e as Error & MysqlErrors
        if (error.code) {
            switch (error.code) {
                case "ER_DUP_ENTRY":
                    return NextResponse.json({message: "Email address is already in use."}, {status: 500});
                case "ER_BAD_DB_ERROR":
                    return new Response("Database not found", {status: 500});
                case "ER_ACCESS_DENIED_ERROR":
                    return new Response("Database access denied", {status: 500});
            }
            return NextResponse.json({message: error.message}, {status: 500});
        }
    }
}
