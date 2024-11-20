import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const API_KEY = "b466ae3b41c34a358d6b5eeb22933bf7";

  useEffect(() => {
    const getRates = async () => {
      const respon = await fetch(`https://api.currencyfreaks.com/latest?apikey=${API_KEY}`);
      const json = await respon.json();
      setData(json.rates);
      setLoading(false);
    };

    getRates();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && <Table rates={data} />}
    </div>
  );
};

export default App;