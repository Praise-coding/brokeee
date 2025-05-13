import {mysqlConnection} from "@/app/api/connectionOptions";
import {SignupFormInput} from "@/app/Types";
import {hashPassword} from "@/app/api/encrypter";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

type timezone = {
    timezone: string
}

interface MysqlErrors extends Error {
    code?: string;
    errno?: number;
    sqlMessage?: string;
}

export async function POST(request: Request) {
    try {
        const userInput: SignupFormInput & timezone = await request.json()
        const newHashedPassword = await hashPassword(userInput["Password"]);
        const sqlNeededData = [
            userInput["First Name"], userInput["Last Name"], userInput["Country"],
            newHashedPassword, userInput["Email"], userInput["timezone"], userInput["Phone Number"]
        ]

        await mysqlConnection.execute(`
           insert into User(FirstName, LastName, Country, userPassword, Email, timezone, PhoneNumber, DateJoined)
           values (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP);
       `, sqlNeededData);

        await SendEmail(`Someone just created an account. \n
Email: ${userInput["Email"]}`, "cherrypopice504@gmail.com", "New Account Created")
        return new Response("Successful", {status: 200});


    } catch (error: unknown) {
        const sqlError = error as MysqlErrors
        console.error(sqlError)
        switch (sqlError.code) {
            case "ER_DUP_ENTRY":
                return new Response("Email already exists", {status: 400});
            case "ER_BAD_DB_ERROR":
                return new Response("Database not found", {status: 500});
            case "ER_ACCESS_DENIED_ERROR":
                return new Response("Database access denied", {status: 500});
            default:
                return new Response(sqlError.sqlMessage || "Database error", {status: 500});
        }
    }
}
