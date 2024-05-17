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
    <div className="relative overflow-x-auto">
      <table className="bg-gray-light-2 rounded-2xl rounded-bl-none w-full">
        <thead className="border-b-4 border-white">
          <tr>
            <th colSpan="2" scope="col" className="py-3">
              Summary
            </th>
          </tr>
        </thead>
        <tbody>
          {monthsData.map(({ month, value }) => (
            <tr
              key={month}
              className="text-gray-darkest uppercase border-b-2 border-white"
            >
              <td className="px-4 py-3">{month}</td>
              <td className="px-4 py-3 text-right">{value} UAH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryByMonth;
