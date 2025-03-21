import { useEffect, useState } from "react";




function useCurrencyConv(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

                // - https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}
                // + https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}

        const res = fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        //console.log(res);
    }, [currency])
    //console.log(data);
    return data;
}


export default useCurrencyConv;
