export async function fetchCryptoPrice() {
    try {
        const fetchData = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ripple,litecoin,bitcoin,ethereum,tether,binancecoin,doge&vs_currencies=usd",
            {
                cache: 'force-cache', // or 'no-store', 'reload', etc.
                next: {
                    revalidate: 60, // cache for 60 seconds
                },
            })

        return await fetchData.json()
    } catch {
        return []
    }

}