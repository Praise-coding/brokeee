import React from 'react'
import TransactionMenuIcon from "@/app/Admin/Sidebar/icons/transactionMenuIcon";
import BuycryptoMenuIcon from "@/app/Admin/Sidebar/icons/buycryptoMenuIcon";
import SubscriptionMenuIcon from "@/app/Admin/Sidebar/icons/subscriptionMenuIcon";
import LogoutMenuIcon from "@/app/Admin/Sidebar/icons/logoutMenuIcon";
import DepositMenuIcon from "@/app/Admin/Sidebar/icons/depositMenuIcon";
import WithdrawMenuIcon from "@/app/User/Sidebar/icons/withdrawMenuIcon";
import SocialMediaMenuIcon from "@/app/Admin/Sidebar/icons/SocialMediaMenuIcon";
import WalletMenuIcon from "@/app/User/Sidebar/icons/walletMenuIcon";

function UsersMenuIcon({isPath}: { isPath: boolean | undefined }) {
    return <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 19C17 17.6044 17 16.9067 16.8278 16.3389C16.44 15.0605 15.4395 14.06 14.1611 13.6722C13.5933 13.5 12.8956 13.5 11.5 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
            stroke={isPath ? "#FFFFFF" : "#9E9E9E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}

function MenuIconToShow({path, isPath}: { path: string, isPath?: boolean }) {
    switch (path) {
        case("Transactions"):
            return <TransactionMenuIcon isPath={isPath}/>
        case("Users"):
            return <UsersMenuIcon isPath={isPath}/>
        case("Wallets"):
            return <WalletMenuIcon isPath={isPath}/>

        case("Buy-Crypto"):
            return <BuycryptoMenuIcon isPath={isPath}/>
        case("Deposit"):
            return <DepositMenuIcon isPath={isPath}/>
        case("Withdraw"):
            return <WithdrawMenuIcon isPath={isPath}/>
        case("Subscription"):
            return <SubscriptionMenuIcon isPath={isPath}/>
        case("Social-Media"):
            return <SocialMediaMenuIcon isPath={isPath}/>
        case("Logout"):
            return <LogoutMenuIcon isPath={isPath}/>
        default:
            return "null";
    }
}

export default MenuIconToShow
