import DisplayCryptoStores from "@/app/User/Buy-Crypto/DisplayCryptoStores";
import {fetchStores} from "@/app/User/Buy-Crypto/fetchStores";
import {cryptoStores} from "@/app/Types";

async function Page() {
    const response = await fetchStores()
    const depositAddresses = ((response as Array<unknown>)[0] as cryptoStores[])

    return (
        <div>
            <div className={"grid mt-[20px] grid-cols-1 sm:grid-cols-2 gap-[10px]"}>
                {depositAddresses.map((data, key) => {
                    return (
                        <DisplayCryptoStores key={key} data={data}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Page;