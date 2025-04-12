import WithdrawalFormInput from "./WithdrawalFormInput";
import {Wallets} from "@/app/Types";
import Transactions from "./Transaction";
import {fetchWalletsForUser} from "@/app/User/Wallets/fetchWalletsForUser";
import {fetchWalletAddresses} from "@/app/Admin/Wallets/fetchStores";

type ee = {
    walletType: string
}
async function Page() {
  const getWalletForUser = await fetchWalletsForUser()
    const  userWallets = ((getWalletForUser as Array<unknown>)[0] as Wallets[])
    const getAllWalletType = await fetchWalletAddresses()
    const  walletTypes = ((getAllWalletType as Array<unknown>)[0] as Wallets[]) as ee[]

    return (
        <div>
            <WithdrawalFormInput getAllWalletType={walletTypes}/>
            <Transactions arrayOfData={userWallets} sectionName={"Wallet"}/>
        </div>
    );
}

export default Page;