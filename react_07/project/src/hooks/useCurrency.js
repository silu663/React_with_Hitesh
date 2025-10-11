import { useEffect,useState } from "react";

function useCurrency(currency){
    const [data, setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setdata(response[currency])
            
        })
    },[currency])

    console.log(data);
    return data;
}

export default useCurrency; 