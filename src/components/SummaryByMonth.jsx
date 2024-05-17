import { getMonthIndex } from "../helpers/getMonthIndex";

const SummaryByMonth = ({ monthStats }) => {
  if (!monthStats) return null;

  const currentMonthIndex = new Date().getMonth() + 1;

  const monthsData = Object.entries(monthStats)
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
