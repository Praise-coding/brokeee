import {fetchWalletAddresses} from "./fetchStores";
import DisplaySocialMedia from "./DisplaySocialMedia";
import AddSocialMedia from "./addSocialMedia";

type Type = {
    id: number,
    walletType: string
}
async function Page() {
    const response = await fetchWalletAddresses()
    const depositAddresses = ((response as Array<unknown>)[0] as Type[])
    return (
        <div>
            <div className={"grid mt-[20px] grid-cols-1 sm:grid-cols-2 gap-[10px]"}>
                {depositAddresses?.map((data, key) => {
                    return (
                        <DisplaySocialMedia key={key} data={data}/>
                    )
                })}
            </div>

            <AddSocialMedia/>
        </div>
    );
}

export default Page;