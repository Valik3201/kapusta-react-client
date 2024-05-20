import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import {
  selectIncomeStats,
  selectExpenseStats,
} from "../redux/transactions/selectors";

const categoryTranslation = {
  "З/П": "Salary",
  "Коммуналка и связь": "Utilities and Communication",
  Транспорт: "Transport",
  Алкоголь: "Alcohol",
  Развлечения: "Entertainment",
  "Доп. доход": "Additional Income",
  Продукты: "Groceries",
  Здоровье: "Health",
  "Техника:": "Equipment",
};

const descriptionTranslation = {
  ЗП: "Salary",
  Коммуналка: "Utilities",
  Кошти: "Money",
  " Whiskey": "Whiskey",
  "Birthday party": "Birthday party",
};

const BarChart = ({ period, dataType }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const incomeStats = useSelector(selectIncomeStats);
  const expenseStats = useSelector(selectExpenseStats);

  const filterTransactionsByPeriod = (transactions, period, type) => {
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

    return filteredTransactions.map((transaction) => ({
      label:
        descriptionTranslation[transaction.description] ||
        transaction.description,
      value: Math.abs(transaction.amount),
      category:
        categoryTranslation[transaction.category] || transaction.category,
    }));
  };

  const transactions =
    dataType === "income" ? incomeStats.incomes : expenseStats.expenses;
  const filteredData = filterTransactionsByPeriod(
    transactions || [],
    period,
    dataType
  );

  const chartData = {
    labels: filteredData.map((item) => `${item.category}`),
    datasets: [
      {
        label: dataType === "income" ? "Income" : "Expenses",
        data: filteredData.map((item) => item.value),
        backgroundColor:
          dataType === "income"
            ? ["#4caf50", "#81c784", "#a5d6a7"]
            : ["#ff5722", "#ff8a65", "#ffab91"],
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
  period: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
};

export default BarChart;
