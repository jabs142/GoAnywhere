export const CurrencyRow = ({currencyOptions, selectCurrency,onChangeCurrency, amount, onChangeAmount}) => {


    return (
        <div className="currency-row"> 
            <input className="currency-input" type="number" value={amount} onChange={onChangeAmount}/>
            <select className="currency-select" value={selectCurrency} onChange={onChangeCurrency}> 
                {currencyOptions.map(option => {
                    <option key={option} value={option}> {option} </option>
                })}
            </select>
        </div>
    )
}