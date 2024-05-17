import { useEffect, useState } from "react";
import DividerV from "./Icons/DividerV";

const ExpensesIncomeBar = () => {
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    fetch("/src/db/user.json")
      .then((response) => response.json())
      .then((data) => {
        const totalExpenses = data.transactions
          .filter((transaction) => transaction.category !== "Salary")
          .reduce((acc, transaction) => acc + transaction.amount, 0);
        const totalIncome = data.transactions
          .filter((transaction) => transaction.category === "Salary")
          .reduce((acc, transaction) => acc + transaction.amount, 0);

        setExpenses(totalExpenses);
        setIncome(totalIncome);
      })
      .catch((error) => console.error("Error fetching the user data:", error));
  }, []);

  return (
    <div className="container mx-auto flex sm:gap-4 justify-evenly sm:justify-center items-center mt-10 py-2 bg-white rounded-3xl sm:rounded-full shadow-form">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Expenses:
        </p>
        <p className="text-center text-red text-sm font-bold leading-normal">
          - {expenses.toFixed(2)} UAH
        </p>
      </div>
      <DividerV />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Income:
        </p>
        <p className="text-center text-green text-sm font-bold leading-normal">
          + {income.toFixed(2)} UAH
        </p>
      </div>
    </div>
  );
};

export default ExpensesIncomeBar;
