import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/transactions/selectors";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import SummaryByMonth from "./SummaryByMonth";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const categoryTranslations = {
  "З/П": "Salary",
  "Коммуналка и связь": "Communal and Communications",
  Транспорт: "Transport",
  Алкоголь: "Alcohol",
  Развлечения: "Entertainment",
  "Доп. доход": "Add Income",
  Здоровье: "Health",
  Продукты: "Products",
  Техника: "Technique",
  Образование: "Education",
  Хобби: "Hobbies",
  " Спорт и хобби": "Sport and hobbies",
  "Всё для дома": "Everything for home",
  Прочее: "Other",
  Другое: "Other",
};

const TransactionManager = ({
  type,
  getStats,
  getCategories,
  addTransaction,
  deleteTransaction,
  selectCategories,
  selectStats,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const categories = useSelector(selectCategories);
  const stats = useSelector(selectStats);

  useEffect(() => {
    console.log("Categories:", categories);
    dispatch(getStats());

    if (categories && categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories, getStats, getCategories]);

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const getTranslation = (category) => {
    return categoryTranslations[category] || category;
  };

  const translateTransactions = (transactions) => {
    return transactions.map((transaction) => ({
      ...transaction,
      category: getTranslation(transaction.category),
    }));
  };

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="md:h-[616px] lg:h-[580px]">
        <div className="px-4">
          <TransactionForm
            type={type}
            categories={categories.map(getTranslation)}
            addTransaction={addTransaction}
            getCategories={getCategories}
          />

          {stats && (
            <div className="flex gap-[75px] px-8 min-w-full h-full">
              <TransactionList
                transactions={
                  type === "expenses"
                    ? translateTransactions(stats.expenses)
                    : translateTransactions(stats.incomes)
                }
                type={type}
                onDelete={handleDelete}
              />

              <div className="hidden lg:block w-1/5 text-xs">
                <SummaryByMonth monthStats={stats.monthsStats} />
              </div>
            </div>
          )}
        </div>
      </div>

      {stats && (
        <div className="flex justify-between items-end">
          <div className="block lg:hidden w-[230px] text-xs mt-10 pb-10">
            <SummaryByMonth monthStats={stats.monthsStats} />
          </div>

          <div className="hidden md:block lg:hidden">
            <div className="md:bg-desktop-cabbages-2 md:bg-no-repeat md:mr-10  md:mb-10 md:bg-top md:bg-100% md:h-[142px] md:w-[183px]"></div>
          </div>
        </div>
      )}
    </>
  );
};

TransactionManager.propTypes = {
  type: PropTypes.oneOf(["expenses", "incomes", "expenseReports"]).isRequired,
  getStats: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  addTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  selectCategories: PropTypes.func.isRequired,
  selectStats: PropTypes.func.isRequired,
};

export default TransactionManager;
