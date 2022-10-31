import React from 'react'

const Select = (props) => {

    const { allCurrency,

        onchangeValue,
        selectCurrency,
        onChangeCurrency
    } = props

    return (
        <>
            <select className="select" value={selectCurrency} onChange={onChangeCurrency}>
                {
                    allCurrency.map(a => {
                        return <option key={a} value={a}>{a}</option>
                        console.log(a);
                    })
                }

            </select>
            <input
                // value={fromCurrency}
                // onChange={onchangeValue}
                type="number"
                className="input"
            />
        </>  git status


    )
}

export default Select
