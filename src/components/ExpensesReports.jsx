import { useSelector } from "react-redux";
import {
  getExpenseStats,
  getExpenseCategories,
} from "../redux/transactions/operations";
import {
  selectExpenseStats,
  selectExpenseCategories,
} from "../redux/transactions/selectors";
import ReportsManager from "./ReportsManager";
import PropTypes from "prop-types";

const ExpensesReports = () => {
  const period = useSelector((state) => state.transactions.period); // <-- Get period from state

  return (
    <ReportsManager
      type="expenses"
      period={period}
      getStats={getExpenseStats}
      getCategories={getExpenseCategories}
      selectCategories={selectExpenseCategories}
      selectStats={selectExpenseStats}
    />
  );
};

ExpensesReports.propTypes = {
  period: PropTypes.string.isRequired,
};

export default ExpensesReports;
