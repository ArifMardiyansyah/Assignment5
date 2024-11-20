import React from "react";

const Table = (rates) => {
  const list = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

  return (
    <table className="currency-table">
      <thead>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
        {list.map((currency) => {
          const rate = rates.rates[currency];
          if (!rate) {
            return null;
          }
          const buy = (parseFloat(rate) * 1.05).toFixed(4);
          const sell = (parseFloat(rate) * 0.95).toFixed(4);

          return (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{buy}</td>
              <td>{rate}</td>
              <td>{sell}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
