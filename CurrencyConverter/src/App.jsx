import React, { useEffect, useState } from "react";
import { currencyConverter } from "./api/PostApi";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // const currencyInfo = currencyConverter("usd");
  const currencyInfo = useCurrencyInfo(from);
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(() => {
    setConvertedAmount(0);
  }, [from, to, currencyInfo]);

  const options = Object.keys(currencyInfo);

  return (
    <main className="h-lvh text-white bg-neutral-800">
      <h1 className="text-2xl text-center py-5">Currency Converter</h1>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-neutral-700 rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="from" className="block mb-2">From</label>
              <select
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {options.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="to" className="block mb-2">To</label>
              <select
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {options.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => {
                // const temp = from;
                setFrom(to);
                setTo(from);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Swap Currencies
            </button>
          </div>
          <button
            onClick={convert}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Convert
          </button>
          <div className="mt-4 text-center">
            <p className="text-lg">
              {convertedAmount.toFixed(2)} {to.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
