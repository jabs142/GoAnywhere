import { CurrencyRow } from "../CurrencyRow";
import {useEffect, useState} from "react"

export const CurrencyPage = () => {
    const URL= "https://api.exchangerate.host/latest" 
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [currency1, setCurrency1] =useState()
    const [currency2, setCurrency2] =useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountFromCurrency, setAmountFromCurrency] = useState(true)

    console.log(URL)

    let toAmount, fromAmount 

    if(amountFromCurrency) {
        fromAmount = amount;
        toAmount= amount * exchangeRate;
    } else {
        toAmount= amount;
        fromAmount = amount/ exchangeRate;
    }

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrencyInObject = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setCurrency1(data.base)
                setCurrency2(firstCurrencyInObject)
                setExchangeRate(data.rates[firstCurrencyInObject])
            })
    }, [])


    useEffect(() => {
        if (currency1 != null && currency2 != null) {
          fetch(`${URL}?base=${currency1}&symbols=${currency2}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[currency2]))
        }
      }, [currency1,currency2])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountFromCurrency(false)
    }

    return (
        <div className="currency-page">
            <h1> Convert currency </h1> 
            <CurrencyRow 
                currencyOptions={currencyOptions}
                selectCurrency={currency1}
                onChangeCurrency={e=> setCurrency1(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount= {fromAmount}
            /> 
            <div> = </div>
            <CurrencyRow 
                currencyOptions={currencyOptions}
                selectCurrency={currency2}
                onChangeCurrency={e=> setCurrency2(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount= {toAmount}
            />
        </div>
    )
}
