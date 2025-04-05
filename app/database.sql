create database Asininity;

use Asininity;

create table User
(
    userid         int          not null auto_increment,
    FirstName      varchar(255) not null,
    LastName       varchar(255) not null,
    PhoneNumber    varchar(255) not null,
    Country        varchar(56)  not null,
    userPassword   text         not null,
    Email          varchar(255) not null unique,
    ProfilePicture varchar(255),
    emailVerified  varchar(12)  not null default 'unverified',
    IdentityCard   varchar(255),
    role           varchar(10)  not null default 'user',
    AccountStatus  varchar(255) not null default 'unverified',
    Timezone       varchar(50)  not null,
    DateJoined     DATETIME     not null,
    isBlocked      tinyint      not null default 0,
    primary key (userid)
);
create table UserNotification
(
    userid            int unique,
    popUpMessage      text,
    notification      text,
    showNotifications tinyint not null default 1,
    foreign key User (userid) references User (userid)
        on delete cascade

);

create trigger updateNotification
    after insert
    on User
    for each row
begin
    insert into usernotification (userid, popUpMessage, notification)
    values (NEW.userid, '', 'Submit your ID to verify your account');
end;

create table UserVerification
(
    userid            int          not null,
    Email             varchar(255) not null unique,
    verification_code int,
    createdAt         DATETIME,
    expiryDate        DATETIME,
    primary key (userid)
);

create table Session
(
    sessionId  varchar(40) not null unique,
    userId     int         not null,
    expiryDate datetime    not null,

    primary key (sessionId),
    foreign key (userId)
        references User (userId)
        on delete cascade
);
create table UserAccountInfo
(
    userid           int     not null unique,
    Deposited        int              default (0) not null,
    Profit           int              default (0) not null,
    AllowDeposit     tinyint not null default 1,
    AllowWithdrawal  tinyint not null default 1,
    WithdrawalNotice tinyint not null default 0,
    foreign key (userid)
        references User (userid)
        on delete cascade
);


create TABLE BankTransfer
(
    BankTransferId int          not null,
    Address        text         not null,
    FullName       varchar(200) not null,
    BankName       text         not null,
    AccountNumber  text         not null,
    IBANSWIFTCode  text         not null,
    primary key (BankTransferId)
);

create table Transactions
(
    TransactionId            int         not null auto_increment,
    userid                   int         not null,
    Amount                   int         not null,
    TransactionType          varchar(12) not null,
    TransactionDate          Datetime    not null,
    TransactionStatus        varchar(10) not null default 'Pending',
    TransactionReceipt       varchar(255),
    TransactionMethod        varchar(15) not null,
    TransactionWalletAddress text                 default null,
    BankTransferId           int,
    primary key (TransactionId),
    foreign key (userid)
        references User (userid)
        on delete cascade,
    foreign key (BankTransferId)
        references BankTransfer (BankTransferId)
        on delete cascade
);

create table ResetPassword
(
    Email             varchar(255) not null unique,
    verification_code int,
    createdAt         DATETIME,
    expiryDate        DATETIME,
    primary key (Email)
);

CREATE TRIGGER after_user_insert
    AFTER INSERT
    ON user
    FOR EACH ROW
BEGIN
    INSERT INTO UserAccountInfo (userid)
    VALUES (NEW.userid);
END;

create table DepositAddresses
(
    id      int auto_increment primary key,
    name    varchar(30) not null,
    address text        not null
);

create table WithdrawOptions
(
    id      int auto_increment primary key,
    name    varchar(30) not null,
    address text        not null
);

create table subscriptions
(
    id       int auto_increment primary key,
    planType varchar(20) not null,
    price    int         not null,
    infoText text
);

create table CryptoStores
(
    id        int auto_increment primary key,
    storeName varchar(20) not null,
    storeUrl  text        not null
);

create table socialMedia
(
    id        int auto_increment primary key,
    mediaName varchar(20) not null,
    mediaUrl  text        not null
);
