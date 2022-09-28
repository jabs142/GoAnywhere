import { CurrencyRow } from "../CurrencyRow";
import { useEffect, useState } from "react"

export const CurrencyPage = () => {
    const API_URL = "https://api.exchangerate.host"
    const [currencies, setCurrencies] = useState([]);
    const [fromAmount, setFromAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('SGD')
    const [toAmount, setToAmount] = useState(1)
    const [toCurrency, setToCurrency] = useState('USD')

    // On mount, fetch and set all possible currencies
    useEffect(() => {
        fetch(`${API_URL}/latest`)
            .then(res => res.json())
            .then(data => setCurrencies(Object.keys(data.rates)))
    }, [])

    useEffect(() => {
        fetch(`${API_URL}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${fromAmount}`)
            .then(res => res.json())
            .then(data => setToAmount(data.result))
    }, [fromCurrency, toCurrency, fromAmount])

    return (
        <div className="currency-page">
            <h1> Convert currency </h1>
            <CurrencyRow
                currencies={currencies}
                selectedCurrency={fromCurrency}
                onChangeCurrency={event => setFromCurrency(event.target.value)}
                onChangeAmount={(event) => setFromAmount(event.target.value)}
                amount={fromAmount}
            />
            <div> = </div>
            <CurrencyRow
                currencies={currencies}
                selectedCurrency={toCurrency}
                onChangeCurrency={event => setToCurrency(event.target.value)}
                onChangeAmount={(event) => setToAmount(event.target.value)}
                amount={toAmount}
                disabled={true}
            />
        </div>
    )
}
