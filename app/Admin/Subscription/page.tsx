import React from 'react';
import SubscriptionCard from "@/app/Admin/Subscription/SubscriptionCard";
import {fetchSubscriptions} from "@/app/Admin/Subscription/subscriptionCardsInfo";
import {subscriptionsType} from "@/app/Types";
import AddSubscription from "@/app/Admin/Subscription/addSubscription";

async function Page() {
    const response = await fetchSubscriptions()
    const depositAddresses = ((response as Array<unknown>)[0] as subscriptionsType[])

    return (
        <>
            <div
                className={"grid  gap-[20px] sm:mt-[14px] mt-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
                {depositAddresses.map((data, key) => {
                    return (
                        <SubscriptionCard key={key} plan={data.planType} price={data.price}
                                          id={data.id} infoText={data.infoText}/>
                    )
                })}


            </div>
            <AddSubscription/>
        </>

    );
}

export default Page;