import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/transactions/selectors";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import SummaryByMonth from "./SummaryByMonth";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TransactionForm
        type={type}
        categories={categories}
        getStats={getStats}
        addTransaction={addTransaction}
        getCategories={getCategories}
      />

      {stats && (
        <>
          <TransactionList
            transactions={type === "expenses" ? stats.expenses : stats.incomes}
            onDelete={handleDelete}
          />

          <SummaryByMonth monthStats={stats.monthStats} />
        </>
      )}
    </div>
  );
};

export default TransactionManager;
