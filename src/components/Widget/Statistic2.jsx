import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./widget.css";

Chart.register();

function Statistic({ ...props }) {
  const data = {
    labels: [
      "Uttar Pradesh",
      "Delhi",
      "Madhya Pradesh",
      "Rajashtan",
      "West Bengal",
      "Harayana",
    ],
    datasets: [
      {
        data: [10, 20, 40, 40, 50, 60, 50], // Remove quotes to use numbers
        backgroundColor: [
          "rgba(186, 237, 189, 1)",
          "rgba(198, 199, 248, 1)",
          "rgba(28, 28, 28, 1)",
          "rgb(177, 227, 255)",
          "rgb(149, 164, 252)",
          "rgb(161, 227, 203)",
        ],
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={` p-3 md:py-4 md:px-6 ${props.className} col`}>
      <h1 className="text-medium font-semibold pb-4">Units by Location</h1>
      <div className="">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Statistic;
