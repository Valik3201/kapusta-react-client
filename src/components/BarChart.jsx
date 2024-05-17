import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMediaQuery } from "react-responsive";

const BarChart = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  console.log(isMobile);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Prices",
        data: data.map((item) => item.value),
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderRadius: 10,
        barThickness: isMobile ? 15 : 30,
        barPercentage: isMobile ? 0.3 : 0.7,
        categoryPercentage: isMobile ? 0.4 : 0.8,
      },
    ],
  };

  const options = {
    type: "bar",
    indexAxis: isMobile ? "y" : "x",
    layout: {
      padding: {
        left: isMobile ? 40 : 20,
        right: isMobile ? 100 : 20,
        top: isMobile ? 0 : 20,
        bottom: isMobile ? 0 : 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: !isMobile,
        },
      },
      y: {
        grid: {
          display: !isMobile,
        },
        ticks: {
          display: isMobile,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: isMobile ? "end" : "end",
        align: isMobile ? "end" : "end",
        formatter: (value) => {
          return ` ${value} HUA`;
        },
        color: "#52555F",
        font: {
          size: isMobile ? 10 : 12,
        },
      },
    },
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 justify-center items-center sm:mt-10 sm:py-14 p-2 md:p-8 lg:px-32 bg-white rounded-3xl shadow-none sm:shadow-form h-full">
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
