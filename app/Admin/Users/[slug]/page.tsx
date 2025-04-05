import React from 'react';
import {AllUserInfo, UserInfo} from "@/app/Types";
import SettingsForm from "./SettingsForm";
import {GetAllUsers} from "@/app/Admin/Users/getAllUsers";
import {getParticularUserInfo} from "@/app/Admin/Users/getParticularUserInfo";
import Transactions from "@/app/Admin/Users/[slug]/Transactions";
import ToggleOptions from "@/app/Admin/Users/[slug]/ToggleOptions";
import DeleteUser from "@/app/Admin/Users/[slug]/DeleteUser";

export async function generateStaticParams() {
    const fetchUsers = await GetAllUsers()
    const getAllUsers: { data: UserInfo[] } = await fetchUsers?.json();

    return getAllUsers.data.map((data) => {
        return {
            slug: data.userid.toString()
        }
    })
}

async function page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const fetchData = await getParticularUserInfo(slug)
    const response: AllUserInfo = (await fetchData?.json()) || {}

    return (
        <>
            <SettingsForm UserInfo={response?.UserInfo} UserBalance={response?.UserBalance}
                          UserNotification={response?.UserNotification}/>


            <Transactions sectionName={"All transactions"} arrayOfData={response?.UserTransactions}/>
            <ToggleOptions userData={response}/>
            <DeleteUser
                id={response?.["UserInfo"]?.["userid"]}/>


        </>
    );
}

export default page;