import img from "./img/arrow.png"
import './App.css';
import Select from "./Select";
import { useEffect, useState } from "react";

function App() {
  const [allCurrency, setAllCurrency] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [amountInfromCurrency, setAmountInFromCurrency] = useState(true);


  useEffect(() => {
    fetch("https://api.exchangerate.host/latest").
      then(res => res.json()).
      then(data => {
        setAllCurrency(Object.keys(data.rates));
        setFromCurrency(data.base)
        setToCurrency(Object.keys(data.rates)[119])



      })
  }, []

  )


  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`).
      then(res => res.json()).
      then(data => {
        setExchangeRate(data.rates[toCurrency])
      })
  }, [fromCurrency, toCurrency]
  )

  let toAmount, fromAmount
  if (amountInfromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  const handleFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true)
  }

  const handleToAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false)
  }

  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <Select
            allCurrency={allCurrency}
            selectCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            amount={fromAmount}
            onchangeValue={e => handleFromAmount(e)}
          />


        </div>
        <img

          src={img}
          alt=""
          className="img"
        />
        <div className="right">
          <Select allCurrency={allCurrency}
            selectCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            amount={toAmount}
            onchangeValue={e => handleToAmount(e)}
          />


        </div>
      </div>
      <div className="res">
        <button className="btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
