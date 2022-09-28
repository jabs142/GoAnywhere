export const CurrencyRow = ({ currencies, selectedCurrency, onChangeCurrency, amount, onChangeAmount, disabled = false }) => {

    return (
        <div className="currency-row">
            <input disabled={disabled} className="currency-input" type="number" value={amount} onChange={onChangeAmount} />
            <select className="currency-select" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencies.map(option => {
                    return (< option key={option} value={option} > {option} </option>)
                })}
            </select>
        </div>
    )
}