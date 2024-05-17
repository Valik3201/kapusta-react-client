import {
  getIncomeStats,
  getIncomeCategories,
  addIncome,
  deleteTransaction,
} from "../redux/transactions/operations";
import {
  selectIncomeStats,
  selectIncomeCategories,
} from "../redux/transactions/selectors";
import TransactionManager from "./TransactionManager";

const Incomes = () => {
  return (
    <TransactionManager
      type="incomes"
      getStats={getIncomeStats}
      getCategories={getIncomeCategories}
      addTransaction={addIncome}
      deleteTransaction={deleteTransaction}
      selectCategories={selectIncomeCategories}
      selectStats={selectIncomeStats}
    />
  );
};

export default Incomes;
