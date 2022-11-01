import React from 'react'

const Select = (props) => {

    const { allCurrency,

        onchangeValue,
        selectCurrency,
        onChangeCurrency,
        amount
    } = props

    return (
        <>
            <select className="select" value={selectCurrency} onChange={onChangeCurrency}>
                {
                    allCurrency.map(a => {
                        return <option key={a} value={a}>{a}</option>

                    })
                }

            </select>
            <input
                value={amount}
                onChange={onchangeValue}
                type="number"
                className="input"
            />
        </>


    )
}

export default Select
