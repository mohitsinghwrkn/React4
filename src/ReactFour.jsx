import React, { useState, useEffect } from "react";

const ReactFour = () => {
  const [loading, setLoading] = useState(true);
  const [rateUSD, setRateUSD] = useState(1);
  const [rateEUR, setRateEUR] = useState(0.927965);
  const [rateINR, setRateINR] = useState(83.044601);
  const [rateJPY, setRateJPY] = useState(148.313498);

  const TableStyle = { border: "1px solid black" };
  const StyleImp = { border: "2px solid green" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch();
        ("https://api.forexrateapi.com/v1/latest?api_key=becf972b57b5a4bd53cf5dde23a1308e&base=USD&currencies=EUR,INR,JPY");
        const result = await response.json();
        setRateEUR(result.rates.EUR);
        setRateINR(result.rates.INR);
        setRateJPY(result.rates.JPY);
        console.log(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <b>React.js Task</b>
          <table>
            <tr>
              <th style={TableStyle}>Currency</th>
              <th style={TableStyle}>INR</th>
              <th style={TableStyle}>USD</th>
              <th style={TableStyle}>EUR</th>
              <th style={TableStyle}>JPY</th>
            </tr>
            <tr>
              <th style={TableStyle}>INR</th>
              <td style={{ ...TableStyle, ...StyleImp }}>1</td>
              <td style={TableStyle}>{1 / rateINR}</td>
              <td style={TableStyle}>{(1 / rateINR) * rateEUR}</td>
              <td style={TableStyle}>{(1 / rateINR) * rateJPY}</td>
            </tr>
            <tr>
              <th style={TableStyle}>USD</th>
              <td style={TableStyle}>{rateINR}</td>
              <td style={{ ...TableStyle, ...StyleImp }}>{rateUSD}</td>
              <td style={TableStyle}>{rateEUR}</td>
              <td style={TableStyle}>{rateJPY}</td>
            </tr>
            <tr>
              <th style={TableStyle}>EUR</th>
              <td style={TableStyle}>{(1 / rateEUR) * rateINR}</td>
              <td style={TableStyle}>{1 / rateEUR}</td>
              <td style={{ ...TableStyle, ...StyleImp }}>1</td>
              <td style={TableStyle}>{(1 / rateEUR) * rateJPY}</td>
            </tr>
            <tr>
              <th style={TableStyle}>JPY</th>
              <td style={TableStyle}>{(1 / rateJPY) * rateINR}</td>
              <td style={TableStyle}>{1 / rateJPY}</td>
              <td style={TableStyle}>{(1 / rateJPY) * rateEUR}</td>
              <td style={{ ...TableStyle, ...StyleImp }}>1</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReactFour;
