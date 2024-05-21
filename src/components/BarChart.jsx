import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chart.js/auto";
import { useSelector } from "react-redux";
import {
  selectIncomeStats,
  selectExpenseStats,
} from "../redux/transactions/selectors";
import categoryTranslations from "../helpers/categoryTranslations";

const BarChart = ({ period, dataType }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const incomeStats = useSelector(selectIncomeStats);
  const expenseStats = useSelector(selectExpenseStats);
  let delayed;

  const filterTransactionsByPeriod = (transactions, period) => {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const [month, year] = period.split(" ");
      const periodDate = new Date(
        year,
        new Date(Date.parse(month + " 1, 2012")).getMonth(),
        1
      );
      return (
        transactionDate.getMonth() === periodDate.getMonth() &&
        transactionDate.getFullYear() === periodDate.getFullYear()
      );
    });

    const aggregatedData = filteredTransactions.reduce((acc, transaction) => {
      const category =
        categoryTranslations[transaction.category] || transaction.category;
      const value = Math.abs(transaction.amount);
      if (!acc[category]) {
        acc[category] = { label: category, value: 0 };
      }
      acc[category].value += value;
      return acc;
    }, {});

    return Object.values(aggregatedData);
  };

  const transactions =
    dataType === "income" ? incomeStats.incomes : expenseStats.expenses;
  const filteredData = filterTransactionsByPeriod(transactions || [], period);

  const chartData = {
    labels: filteredData.map((item) =>
      item.label.length > 15 ? `${item.label.slice(0, 11)}...` : item.label
    ),
    datasets: [
      {
        label: "",
        data: filteredData.map((item) => item.value),
        backgroundColor: ["#FF751D", "#FFDAC0"],
        borderRadius: 10,
        borderWidth: 1,
        barThickness: isMobile ? "18" : "38",
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 20;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 900 + context.datasetIndex * 2000;
        }
        return delay;
      },
    },
    responsive: true,
    indexAxis: isMobile ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: !isMobile ? "100" : "end",
        anchor: "end",
        offset: !isMobile ? "8" : "",
        font: {
          size: 10,
        },
        clamp: false,
        formatter: (value) => `${value} UAH`,
      },
    },
    scales: {
      x: {
        suggestedMax:
          Math.max(...filteredData.map((item) => item.value)) * 1.04,
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          LayoutPosition: "top",
          beginAtZero: true,
          display: !isMobile,
          font: {
            size: 10,
          },
        },
      },
      y: {
        suggestedMax:
          Math.max(...filteredData.map((item) => item.value)) * 1.04,
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          drawOnChartArea: true,
          display: isMobile,
          drawBorder: false,
        },
        ticks: {
          LayoutPosition: "left",
          display: isMobile,
          font: {
            size: 10,
          },
          labelOffset: -12,
          mirror: true,
          align: "end",
          padding: 0,
        },
      },
    },
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 justify-center items-center sm:mt-10 sm:py-14 p-2 md:p-8 lg:px-32 bg-white rounded-3xl shadow-none sm:shadow-form h-full">
      {filteredData.length > 0 ? (
        <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
      ) : (
        <div className="text-center py-8 text-gray-500">
          No data for that period!
        </div>
      )}
    </div>
  );
};

BarChart.propTypes = {
  period: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
};

export default BarChart;
