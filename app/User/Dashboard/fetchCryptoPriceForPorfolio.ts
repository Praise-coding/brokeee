"use server"

export async function fetchCryptoPriceForPorfolio() {
    try {
        const fetchData = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ripple,litecoin,binancecoin,doge&vs_currencies=usd")

        return await fetchData.json()
    } catch {
        return []
    }

}