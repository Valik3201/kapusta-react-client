import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Prices",
        data: data.map((item) => item.value),
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderRadius: 10,
        barThickness: 38,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    responsive: true,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 justify-center items-center my-10 pt-10 pb-10 pl-32 pr-32 bg-white rounded-3xl shadow-form w-758">
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChart;
