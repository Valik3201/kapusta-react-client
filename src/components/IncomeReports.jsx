import {
  getIncomeStats,
  getIncomeCategories,
} from "../redux/transactions/operations";
import {
  selectIncomeStats,
  selectIncomeCategories,
} from "../redux/transactions/selectors";
import ReportsManager from "./ReportsManager";
import PropTypes from "prop-types";

const IncomeReports = ({ period }) => (
  <ReportsManager
    type="incomes"
    period={period}
    getStats={getIncomeStats}
    getCategories={getIncomeCategories}
    selectCategories={selectIncomeCategories}
    selectStats={selectIncomeStats}
  />
);

IncomeReports.propTypes = {
  period: PropTypes.string.isRequired,
};

export default IncomeReports;
