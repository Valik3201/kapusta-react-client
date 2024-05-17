import Trash from "./Icons/Trash";

const TransactionList = ({ transactions, type, onDelete }) => {
  const sortedTransactions = transactions?.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="relative overflow-x-auto md:w-full lg:w-4/5 text-xs">
      <table className="bg-gray-light-2 rounded-t-2xl w-full">
        <thead>
          <tr className="uppercase">
            <th className="px-2 py-3">Date</th>
            <th className="px-2 py-3">Description</th>
            <th className="px-2 py-3">Category</th>
            <th className="px-2 py-3">Sum</th>
            <th className="px-2 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>

        <tbody className="bg-white border-gray-light-2 border-2 text-gray-darkest">
          {sortedTransactions &&
            sortedTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <td className="border-gray-light-2 border-b-2 text-center">
                  {transaction.date}
                </td>
                <td className="border-gray-light-2 border-b-2">
                  {transaction.description}
                </td>
                <td className="border-gray-light-2 border-b-2 text-center">
                  {transaction.category}
                </td>
                <td
                  className={`border-gray-light-2 border-b-2 text-center font-bold ${
                    type === "expenses" ? "text-red" : "text-green"
                  }`}
                >
                  {type === "expenses" ? "-" : ""} {transaction.amount} UAH
                </td>
                <td className="border-gray-light-2 border-b-2 text-center">
                  <button
                    onClick={() => onDelete(transaction._id)}
                    className="hover:bg-gray-light-2 rounded-full p-2 transition duration-200 ease-in-out"
                  >
                    <Trash />
                    <span className="sr-only">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
