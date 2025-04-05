import React from 'react';
import Image from "next/image";
import {UserInfo} from "@/app/Types";
import Link from "next/link";
import {GetAllUsers} from "@/app/Admin/Users/getAllUsers";

async function page() {
    const fetchUsers = await GetAllUsers()
    const getAllUsers: { data: UserInfo[] } = await fetchUsers.json()

    return (
        <div>
            <div className={"grid mt-[20px] grid-cols-2 sm:grid-cols-4 gap-[27px]"}>
                {getAllUsers?.data.map((data, key) => {
                    return (
                        <Link href={`Users/${data?.userid}`} key={key}
                              className={"rounded-[18px] cursor-pointer bg-[rgba(0,0,0,0.3)] py-[46px] px-[20px]"}>
                            {
                                <div className={"flex  relative items-center justify-center"}>
                                    {data.ProfilePicture ?
                                        <Image width={50} height={50} src={data?.ProfilePicture} alt={"a pic"}
                                               className={"w-[94.44px] rounded-full h-[94.44px]"}/>
                                        : <div className={"w-[94.44px]  bg-[grey] rounded-full h-[94.44px]"}>

                                        </div>}
                                </div>
                            }

                            <div
                                style={{wordWrap: "break-word"}}
                                className={"mt-[21px] text-center text-white font-nunito font-[700] leading-[22px] tracking-[-0.0571429px] text-white"}>
                                {data?.FirstName} {data?.LastName}
                            </div>
                            <div
                                style={{wordWrap: "break-word"}}
                                className={"text-center mt-[1.7px] text-white font-nunito font-[600] text-[14px] leading-[19px] tracking-[-0.05px] opacity-[0.6]"}>
                                {data?.role}
                            </div>
                            <div
                                style={{wordWrap: "break-word"}}
                                className={"font-nunito mt-[6.82px]  text-[14px] leading-[19px] tracking-[-0.05px] opacity-[0.5] text-white text-center"}>
                                {data?.Email}
                            </div>
                        </Link>
                    )
                }).toReversed()}
            </div>
        </div>
    );
}

export default page;