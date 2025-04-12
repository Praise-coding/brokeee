import React from 'react'
import DashboardMenuIcon from "@/app/User/Sidebar/icons/dashboardMenuIcon";
import TransactionMenuIcon from "@/app/User/Sidebar/icons/transactionMenuIcon";
import DepositMenuIcon from "@/app/User/Sidebar/icons/depositMenuIcon";
import WithdrawMenuIcon from "@/app/User/Sidebar/icons/withdrawMenuIcon";
import SubscriptionMenuIcon from "@/app/User/Sidebar/icons/subscriptionMenuIcon";
import BuyCryptoMenuIcon from "@/app/User/Sidebar/icons/buycryptoMenuIcon";
import SettingsMenuIcon from "@/app/User/Sidebar/icons/settingsMenuIcon";
import LogoutMenuIcon from "@/app/User/Sidebar/icons/logoutMenuIcon";
import SocialMediaMenuIcon from "@/app/Admin/Sidebar/icons/SocialMediaMenuIcon";
import UploadMenuIcon from "@/app/User/Sidebar/icons/uploadMenuIcon";
import WalletMenuIcon from "@/app/User/Sidebar/icons/walletMenuIcon";


function MenuIconToShow({path, isPath}: { path: string, isPath?: boolean }) {
    switch (path) {
        case("Dashboard"):
            return <DashboardMenuIcon isPath={isPath}/>
        case("Transactions"):
            return <TransactionMenuIcon isPath={isPath}/>
        case("Deposit"):
            return <DepositMenuIcon isPath={isPath}/>
        case("Withdraw"):
            return <WithdrawMenuIcon isPath={isPath}/>
        case("Buy-Crypto"):
            return <BuyCryptoMenuIcon isPath={isPath}/>
        case("Subscription"):
            return <SubscriptionMenuIcon isPath={isPath}/>
        case("Social-Media"):
            return <SocialMediaMenuIcon isPath={isPath}/>
        case("Wallets"):
            return <WalletMenuIcon isPath={isPath}/>

        case("Settings"):
            return <SettingsMenuIcon isPath={isPath}/>
        case("Upload-ID"):
            return <UploadMenuIcon isPath={isPath}/>
        case("Logout"):
            return <LogoutMenuIcon isPath={isPath}/>
        default:
            return "null";
    }
}

export default MenuIconToShow
