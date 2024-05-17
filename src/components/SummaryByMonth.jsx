import { useSelector } from "react-redux";
import { getMonthIndex } from "../helpers/getMonthIndex";
import {
  selectExpenseStats,
  selectLoading,
  selectError,
} from "../redux/transactions/selectors";

const SummaryByMonth = () => {
  const expenseStats = useSelector(selectExpenseStats);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!expenseStats || !expenseStats.monthsStats) return null;

  const currentMonthIndex = new Date().getMonth() + 1;

  const monthsData = Object.entries(expenseStats.monthsStats)
    .filter(([month]) => {
      const monthIndex = getMonthIndex(month);
      return monthIndex <= currentMonthIndex;
    })
    .map(([month, value]) => ({
      month,
      value: value === "N/A" ? 0 : value,
    }));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Summary</th>
          </tr>
        </thead>
        <tbody>
          {monthsData.map(({ month, value }) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryByMonth;
