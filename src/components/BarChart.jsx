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
    labels: filteredData.map((item) => item.label),
    datasets: [
      {
        label: dataType === "income" ? "Income" : "Expenses",
        data: filteredData.map((item) => item.value),
        backgroundColor: ["#ff5722", "#ff8a65", "#ffab91"],
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
        top: isMobile ? 0 : 40,
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
        formatter: (value) => `${value} UAH`,
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
  period: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
};

export default BarChart;
