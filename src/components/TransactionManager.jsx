import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/transactions/selectors";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import SummaryByMonth from "./SummaryByMonth";
import Spinner from "./Spinner";
import categoryTranslations from "../helpers/categoryTranslations";

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
    dispatch(getStats());

    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length, getStats, getCategories]);

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const getTranslation = (category) => {
    return categoryTranslations[category] || category;
  };

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="md:h-[616px] lg:h-[580px]">
        <div className="px-4">
          <TransactionForm
            type={type}
            categories={categories.map((category) => getTranslation(category))}
            addTransaction={addTransaction}
            getCategories={getCategories}
          />

          {stats && (
            <div className="flex md:gap-[75px] md:px-8 min-w-full h-full">
              <TransactionList
                transactions={
                  type === "expenses" ? stats.expenses : stats.incomes
                }
                type={type}
                onDelete={handleDelete}
              />

              <div className="hidden lg:block w-1/5 text-xs">
                <SummaryByMonth monthStats={stats.monthStats} />
              </div>
            </div>
          )}
        </div>
      </div>

      {stats && (
        <div className="justify-between items-end hidden md:flex lg:hidden">
          <div className="w-[230px] text-xs mt-10 pb-10">
            <SummaryByMonth monthStats={stats.monthStats} />
          </div>

          <div>
            <div className="md:bg-desktop-cabbages-2 md:bg-no-repeat md:mr-10  md:mb-10 md:bg-top md:bg-100% md:h-[142px] md:w-[183px]"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionManager;
