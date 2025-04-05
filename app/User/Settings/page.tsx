import React from 'react';
import SettingsForm from "@/app/User/Settings/SettingsForm";
import {auth} from "@/app/api/auth/lib/authOption";
import {User} from "@/app/Types";

async function Page() {
    const user = await auth()
    const userData = user as User
    return (
        <>
            <SettingsForm userData={userData}/>
        </>
    );
}

export default Page;