export async function fetchCryptoPrice() {
    try {
        const fetchData = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd")
        return await fetchData.json()
    } catch {
        return []
    }

}