import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DividerV from "./Icons/DividerV";
import {
  getIncomeStats,
  getExpenseStats,
} from "../redux/transactions/operations";
import {
  selectIncomeStats,
  selectExpenseStats,
  selectLoading,
  selectError,
} from "../redux/transactions/selectors";
import Spinner from "./Spinner";

const categoryTranslations = {
  "З/П": "Salary",
  "Коммуналка и связь": "Communal and Communications",
  Транспорт: "Transport",
  Алкоголь: "Alcohol",
  Развлечения: "Entertainment",
  "Доп. доход": "Additional Income",
  Здоровье: "Health",
  Продукты: "Products",
  Техника: "Technique",
  Образование: "Education",
  Хобби: "Hobbies",
  Другое: "Other",
};

const ExpensesIncomeBar = () => {
  const dispatch = useDispatch();
  const incomeStats = useSelector(selectIncomeStats);
  const expenseStats = useSelector(selectExpenseStats);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getIncomeStats());
    dispatch(getExpenseStats());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  const translatedExpenses =
    expenseStats.expenses?.map((transaction) => ({
      ...transaction,
      category:
        categoryTranslations[transaction.category] || transaction.category,
    })) || [];

  const translatedIncome =
    incomeStats.incomes?.map((transaction) => ({
      ...transaction,
      category:
        categoryTranslations[transaction.category] || transaction.category,
    })) || [];

  const totalExpenses = translatedExpenses.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncome = translatedIncome.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

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
