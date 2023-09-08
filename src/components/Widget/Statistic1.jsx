import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./widget.css";

Chart.register();

function Statistic({ ...props }) {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Current Week",
        data: [10, 20, 40, 40, 50, 60, 50], // Remove quotes to use numbers
        borderColor: "rgba(28, 28, 28, 1)", // Line color
        backgroundColor: "rgba(28, 28, 28, 0.2)", // Fill color
        tension: 0.4, // Adjust the line curve (0.0 to 1.0)
        type: "line", // Set the chart type, bar, line, pie, etc.
      },
      {
        label: "Previous Week",
        data: [15, 20, 70, 40, 20, 60, 40], // Remove quotes to use numbers
        borderColor: "rgba(168, 197, 218, 1)",
        backgroundColor: "rgba(168, 197, 218, 0.2)",
        tension: 0.4,
        type: "line",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
        text: "Total Units",
        position: "top",
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
      <div className={` p-3 md:py-4 md:px-6 ${props.className}`}>
        <h1 className="text-medium font-semibold pb-4">Total Units</h1>
        <div className="">
          <Bar data={data} options={options} />
        </div>
      </div>
  );
}

export default Statistic;
