export type SignupFormInput = {
    "First Name": string
    "Last Name": string
    "Phone Number": string
    Email: string
    Country: string
    Password: string,
    "Confirm Password": string
}

export type User = {
    user: AllUserInfo
}

export type AllUserInfo = {
    UserInfo: UserInfo,
    UserBalance: UserAccountInfo
    UserTransactions?: Transaction[]
    SessionInfo?: SessionInfo
    ErrorMessage?: string
    UserNotification: UserNotification
}
// User Table Schema
export type UserInfo = {
    userid: number;
    FirstName: string;
    LastName: string;
    Country: string;
    userPassword: string; // Store as a hashed password in practice
    Email: string;
    PhoneNumber: string;
    role: string;
    ProfilePicture?: string;
    emailVerified: string;
    isBlocked: number;
    IdentityCard?: string;
    AccountStatus: "unverified" | "verified" | "suspended"; // Enum for clarity
    Timezone: string;
    DateJoined: Date;
};
export type SessionInfo = {
    sessionId: number;
    userId: number;
    expiryDate: Date;
}
// UserAccountInfo Table Schema
export type UserAccountInfo = {
    userid: number;
    Deposited: number;
    Profit: number;
    AllowWithdrawal: number;
    AllowDeposit: number;
    WithdrawalNotice: number;
};

// Transactions Table Schema
export type Transaction = {
    TransactionId: number;
    userid: number;
    Amount: number;
    TransactionType: "Deposit" | "Withdrawal" | "transfer"; // Enum for clarity
    TransactionDate: Date;
    TransactionStatus: "Pending" | "Confirmed" | "Declined"; // Enum for clarity
    TransactionReceipt: string;
    TransactionMethod: string;
    Address?: string;
    FullName?: string;
    TransactionWalletAddress?: string;
    BankName?: string;
    AccountNumber?: string;
    IBANSWIFTCode?: string;
};

export type UserVerification = {
    userid: number;
    Email: string;
    verification_code: number | undefined; // Enum for clarity
    expiryDate: string;
    createdAt: string;
};

export type PasswordResetVerification = {
    Email: string;
    verification_code: number | undefined; // Enum for clarity
    expiryDate: string;
    createdAt: string;
};


export type UserNotification = {
    userid: number;
    popUpMessage: string;
    notification: string;
    showNotifications: number
}

export type allWalletAddress = {
    id: number
    name: string
    address: string
}

export type subscriptionsType = {
    id: number,
    planType: string,
    price: number,
    infoText: string,
}

export type cryptoStores = {
    id: number,
    storeName: string,
    storeUrl: string
}

export type socialMedia = {
    id: number,
    mediaName: string,
    mediaUrl: string
}
