import {
  getExpenseStats,
  getExpenseCategories,
  addExpense,
  deleteTransaction,
} from "../redux/transactions/operations";
import {
  selectExpenseStats,
  selectExpenseCategories,
} from "../redux/transactions/selectors";
import TransactionManager from "./TransactionManager";

const Expenses = () => {
  return (
    <TransactionManager
      type="expenses"
      getStats={getExpenseStats}
      getCategories={getExpenseCategories}
      addTransaction={addExpense}
      deleteTransaction={deleteTransaction}
      selectCategories={selectExpenseCategories}
      selectStats={selectExpenseStats}
    />
  );
};

export default Expenses;
