import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DividerV from "./Icons/DividerV";
import {
  getIncomeStats,
  getExpenseStats,
} from "../redux/transactions/operations";
import {
  selectIncomeStats,
  selectExpenseStats,
  //selectLoading,
  selectError,
} from "../redux/transactions/selectors";
//import Spinner from "./Spinner";
import categoryTranslations from "../helpers/categoryTranslations";
import monthNames from "../helpers/monthNames";

const ExpensesIncomeBar = ({ period }) => {
  const dispatch = useDispatch();
  const incomeStats = useSelector(selectIncomeStats);
  const expenseStats = useSelector(selectExpenseStats);
  //const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getIncomeStats());
    dispatch(getExpenseStats());
  }, [dispatch]);

  const filteredTransactions = (transactions, period) => {
    const [month, year] = period.split(" ");
    return transactions.filter(
      (transaction) =>
        new Date(transaction.date).getMonth() + 1 ===
          monthNames.indexOf(month) + 1 &&
        new Date(transaction.date).getFullYear() === parseInt(year)
    );
  };

  const translatedExpenses = useMemo(() => {
    if (expenseStats.expenses) {
      const filteredExpenses = filteredTransactions(
        expenseStats.expenses,
        period
      );
      return filteredExpenses.map((transaction) => ({
        ...transaction,
        category:
          categoryTranslations[transaction.category] || transaction.category,
      }));
    }
    return [];
  }, [expenseStats.expenses, period]);

  const translatedIncome = useMemo(() => {
    if (incomeStats.incomes) {
      const filteredIncome = filteredTransactions(incomeStats.incomes, period);
      return filteredIncome.map((transaction) => ({
        ...transaction,
        category:
          categoryTranslations[transaction.category] || transaction.category,
      }));
    }
    return [];
  }, [incomeStats.incomes, period]);

  const totalExpenses = translatedExpenses.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncome = translatedIncome.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  //if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto flex sm:gap-4 justify-evenly sm:justify-center items-center mt-10 py-2 bg-white rounded-3xl sm:rounded-full shadow-form">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Expenses:
        </p>
        <p className="text-center text-red text-sm font-bold leading-normal">
          - {totalExpenses.toFixed(2)} UAH
        </p>
      </div>
      <DividerV />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Income:
        </p>
        <p className="text-center text-green text-sm font-bold leading-normal">
          + {totalIncome.toFixed(2)} UAH
        </p>
      </div>
    </div>
  );
};

export default ExpensesIncomeBar;
