import img from "./img/arrow.png"
import './App.css';
import Select from "./Select";
import { useEffect, useState } from "react";

function App() {
  const [allCurrency, setAllCurrency] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()


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
  // console.log(allCurrency);

  return (
    <div className="converter">
      <h1>CYRRENCY CONVERTOR</h1>
      <div className="monete">
        <div className="left">
          <Select allCurrency={allCurrency}
            selectCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}

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
