import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./widget.css";

Chart.register();

function Statistic({ ...props }) {
  const data = {
    labels: [
      "Information Technology",
      "Renewable Energy",
      "Aerospace",
      "Energy and Utilities",
    ],
    datasets: [
      {
        data: [38.6,22.5,30.8,8.1], // Remove quotes to use numbers
        backgroundColor: [
          "rgba(186, 237, 189, 1)",
          "rgba(198, 199, 248, 1)",
          "rgba(28, 28, 28, 1)",
          "rgb(177, 227, 255)",
          "rgb(149, 164, 252)",
          "rgb(161, 227, 203)",
        ],
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
        position: "right",
        labels: {
          generateLabels: function (chart) {
            const labels = chart.data.labels;
            const dataset = chart.data.datasets[0];
            const data = dataset.data;

            return labels.map((label, index) => {
              const value = data[index];
              const color = dataset.backgroundColor[index];

              return {
                text: `${label} - ${value}%`, // Custom legend label format
                fillStyle: color,
                // hidden: isNaN(value) || value <= 0, // Hide if value is zero or NaN
              };
            });
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className={` p-3 md:py-4 md:px-6 ${props.className} max-w-screen-2x1`}>
      <h1 className="text-medium font-semibold pb-4">Organizations by Categories</h1>
      <div className="">
        <Doughnut data={data} options={options} /> {/* Use Doughnut instead of Pie */}
      </div>
    </div>
  );
}

export default Statistic;
