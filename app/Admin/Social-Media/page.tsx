
import {fetchSocialMedia} from "@/app/Admin/Social-Media/fetchStores";
import {socialMedia} from "@/app/Types";
import DisplaySocialMedia from "@/app/Admin/Social-Media/DisplaySocialMedia";
import AddSocialMedia from "@/app/Admin/Social-Media/addSocialMedia";

async function Page() {
    const response = await fetchSocialMedia()
    const depositAddresses = ((response as Array<unknown>)[0] as socialMedia[])
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