import WithdrawalFormInput from "@/app/User/Social-Media/WithdrawalFormInput";
import {fetchSocialMedia} from "@/app/Admin/Social-Media/fetchStores";
import {socialMedia} from "@/app/Types";
async function Page() {
    const response = await fetchSocialMedia()
    const depositAddresses = ((response as Array<unknown>)[0] as socialMedia[])
    return (
        <div>
            <WithdrawalFormInput medias={depositAddresses}/>
        </div>
    );
}

export default Page;