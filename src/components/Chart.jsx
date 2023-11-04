import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const dates = [];

  for (let i = 0; i < arr.length; i++) {
    const date = new Date(arr[i][0]);
    const formattedDate =
      days === "24h" ? date.toLocaleTimeString() : date.toLocaleDateString();
    dates.push(formattedDate);
    prices.push(arr[i][1]);
  }

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Prices in ${currency}`,
        data: prices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default Chart;
