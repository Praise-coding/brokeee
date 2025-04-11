import {mysqlConnection} from "@/app/api/connectionOptions";

async function check() {

    const sql = `
        INSERT INTO Transactions (userid,
                                  Amount,
                                  TransactionType,
                                  TransactionDate,
                                  TransactionReceipt,
                                  TransactionMethod,
                                  TransactionWalletAddress)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

// Sample data to insert


    const values = [
        2,                    // userid
        1000,                   // Amount
        'Deposit',               // TransactionType
        new Date(),             // TransactionDate
        'receipt123.png',       // TransactionReceipt
        'Bitcoin',               // TransactionMethod
        'wallet_0xabc123',      // TransactionWalletAddress
    ];
    for (let i = 0; i < 20; i++) {
        await mysqlConnection.execute(sql, values)
    }
}

check()