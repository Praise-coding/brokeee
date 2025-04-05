import React from 'react'
import SubscriptionCard from "@/app/User/Subscription/SubscriptionCard";
import {fetchSubscriptions} from "@/app/Admin/Subscription/subscriptionCardsInfo";
import {subscriptionsType} from "@/app/Types";

async function Page() {
    const response = await fetchSubscriptions()
    const depositAddresses = ((response as Array<unknown>)[0] as subscriptionsType[])

    return (
        <>
            <div
                className={"grid items-center gap-[20px] sm:mt-[14px] mt-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
                {depositAddresses.map((data, key) => {
                    return (
                        <SubscriptionCard key={key} plan={data?.["planType"]} minimumAmount={data?.["price"]}

                                          infoText={data?.["infoText"]}/>
                    )
                })}

            </div>
        </>
    )
}

export default Page
