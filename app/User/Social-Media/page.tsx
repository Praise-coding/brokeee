import WithdrawalFormInput from "@/app/User/Social-Media/WithdrawalFormInput";
import {fetchSocialMedia} from "@/app/Admin/Social-Media/fetchStores";
import {socialMedia, UserSocialMedias} from "@/app/Types";
import Transactions from "./Transaction";
import {fetchWalletsForUser} from "@/app/User/Social-Media/fetchSocialMedias";

async function Page() {
    const response = await fetchSocialMedia()
    const depositAddresses = ((response as Array<unknown>)[0] as socialMedia[])
    const userMedias = ((await fetchWalletsForUser()) as Array<unknown>)[0] as UserSocialMedias[]
    console.log(userMedias)
    return (
        <div>
            <WithdrawalFormInput medias={depositAddresses}/>
            <Transactions arrayOfData={userMedias} sectionName={"Wallet"}/>
        </div>
    );
}

export default Page;