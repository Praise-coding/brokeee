import React from 'react';
import Link from "next/link";
import {cryptoStores} from "@/app/Types";

function DisplayCryptoStores({data} : { data: cryptoStores }) {
    return (

            <Link
                target={"_blank"}
                style={{color: "rgba(255,255,255,0.76)"}}
                href={data?.["storeUrl"]}
                className={"bg-[#1B2028] w-full text-white font-poppins text-[17px] sm:text-[20px] py-[20px] text-center rounded-[10px]"}>
                {data?.["storeName"]}
            </Link>
    );
}

export default DisplayCryptoStores;