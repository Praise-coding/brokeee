CREATE DATABASE Asininity;
USE Asininity;

-- Users
CREATE TABLE User
(
    userid         INT          NOT NULL AUTO_INCREMENT,
    FirstName      VARCHAR(255) NOT NULL,
    LastName       VARCHAR(255) NOT NULL,
    PhoneNumber    VARCHAR(255) NOT NULL,
    Country        VARCHAR(56)  NOT NULL,
    userPassword   TEXT         NOT NULL,
    Email          VARCHAR(255) NOT NULL UNIQUE,
    ProfilePicture VARCHAR(255),
    emailVerified  VARCHAR(12)  NOT NULL DEFAULT 'unverified',
    IdentityCard   VARCHAR(255),
    role           VARCHAR(10)  NOT NULL DEFAULT 'user',
    AccountStatus  VARCHAR(255) NOT NULL DEFAULT 'unverified',
    Timezone       VARCHAR(50)  NOT NULL,
    DateJoined     DATETIME     NOT NULL,
    isBlocked      TINYINT      NOT NULL DEFAULT 0,
    PRIMARY KEY (userid)
);

-- Notifications
CREATE TABLE UserNotification
(
    userid            INT UNIQUE,
    popUpMessage      TEXT,
    notification      TEXT,
    showNotifications TINYINT NOT NULL DEFAULT 1,
    FOREIGN KEY (userid) REFERENCES User (userid) ON DELETE CASCADE
);

-- Trigger: Insert default notification
DELIMITER //

CREATE TRIGGER updateNotification
    AFTER INSERT
    ON User
    FOR EACH ROW
BEGIN
    INSERT INTO UserNotification (userid, popUpMessage, notification)
    VALUES (NEW.userid, '', '');
END;
//

-- Trigger: Create related UserAccountInfo
CREATE TRIGGER after_user_insert
    AFTER INSERT
    ON User
    FOR EACH ROW
BEGIN
    INSERT INTO UserAccountInfo (userid)
    VALUES (NEW.userid);
END;
//

DELIMITER ;

-- Verification
CREATE TABLE UserVerification
(
    userid            INT          NOT NULL,
    Email             VARCHAR(255) NOT NULL UNIQUE,
    verification_code INT,
    createdAt         DATETIME,
    expiryDate        DATETIME,
    PRIMARY KEY (userid)
);

-- Sessions
CREATE TABLE Session
(
    sessionId  VARCHAR(40) NOT NULL UNIQUE,
    userId     INT         NOT NULL,
    expiryDate DATETIME    NOT NULL,
    PRIMARY KEY (sessionId),
    FOREIGN KEY (userId) REFERENCES User (userId) ON DELETE CASCADE
);

-- Account Info
CREATE TABLE UserAccountInfo
(
    userid           INT     NOT NULL UNIQUE,
    Balance          INT              DEFAULT 0 NOT NULL,
    Deposited        INT              DEFAULT 0 NOT NULL,
    DailyProfit      INT              DEFAULT 0 NOT NULL,
    AllowDeposit     TINYINT NOT NULL DEFAULT 1,
    AllowWithdrawal  TINYINT NOT NULL DEFAULT 1,
    WithdrawalNotice TINYINT NOT NULL DEFAULT 0,
    FOREIGN KEY (userid) REFERENCES User (userid) ON DELETE CASCADE
);

-- Bank Transfers
CREATE TABLE BankTransfer
(
    BankTransferId INT          NOT NULL,
    Address        TEXT         NOT NULL,
    FullName       VARCHAR(200) NOT NULL,
    BankName       TEXT         NOT NULL,
    AccountNumber  TEXT         NOT NULL,
    IBANSWIFTCode  TEXT         NOT NULL,
    PRIMARY KEY (BankTransferId)
);

-- Transactions
CREATE TABLE Transactions
(
    TransactionId            INT         NOT NULL AUTO_INCREMENT,
    userid                   INT         NOT NULL,
    Amount                   INT         NOT NULL,
    TransactionType          VARCHAR(12) NOT NULL,
    TransactionDate          DATETIME    NOT NULL,
    TransactionStatus        VARCHAR(10) NOT NULL DEFAULT 'Pending',
    TransactionReceipt       VARCHAR(255),
    TransactionMethod        VARCHAR(15) NOT NULL,
    TransactionWalletAddress TEXT,
    BankTransferId           INT,
    PRIMARY KEY (TransactionId),
    FOREIGN KEY (userid) REFERENCES User (userid) ON DELETE CASCADE,
    FOREIGN KEY (BankTransferId) REFERENCES BankTransfer (BankTransferId) ON DELETE CASCADE
);

-- Password Reset
CREATE TABLE ResetPassword
(
    Email             VARCHAR(255) NOT NULL UNIQUE,
    verification_code INT,
    createdAt         DATETIME,
    expiryDate        DATETIME,
    PRIMARY KEY (Email)
);

-- Deposit Options
CREATE TABLE DepositAddresses
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(30) NOT NULL,
    address TEXT        NOT NULL
);

-- Withdrawal Options
CREATE TABLE WithdrawOptions
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(30) NOT NULL,
    address TEXT        NOT NULL
);

-- Subscriptions
CREATE TABLE Subscriptions
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    planType VARCHAR(20) NOT NULL,
    price    INT         NOT NULL,
    infoText TEXT
);

-- Crypto Stores
CREATE TABLE CryptoStores
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    storeName VARCHAR(20) NOT NULL,
    storeUrl  TEXT        NOT NULL
);

-- Wallets
CREATE TABLE Wallets
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    Email        TEXT        NOT NULL,
    userid       INT         NOT NULL,
    walletType   VARCHAR(50) NOT NULL,
    Password     TEXT        NOT NULL,
    Status       varchar(10) not null default 'Pending',
    PrivateKey   VARCHAR(20) NOT NULL,
    SecretPhrase VARCHAR(20) NOT NULL,
    FOREIGN KEY (userid) REFERENCES User (userid) ON DELETE CASCADE
);

-- Wallet Types
CREATE TABLE WalletType
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    walletType VARCHAR(20) NOT NULL
);

-- Social Media
CREATE TABLE SocialMedia
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    mediaName VARCHAR(20) NOT NULL
);

-- User's Social Media
CREATE TABLE UserSocialMedia
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    userid   INT         NOT NULL,
    Email    TEXT        NOT NULL,
    Status   VARCHAR(50) NOT NULL default 'Pending',
    Password TEXT        NOT NULL,
    Platform varchar(50) NOT NULL,
    UserName TEXT        NOT NULL,

    FOREIGN KEY (userid) REFERENCES User (userid) ON DELETE CASCADE
);
