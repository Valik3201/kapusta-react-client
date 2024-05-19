import Trash from "./Icons/Trash";

const TransactionList = ({ transactions, type, onDelete }) => {
  const sortedTransactions = transactions?.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <div className="hidden md:block relative overflow-hidden md:w-full lg:w-4/5 text-xs">
        <div className="overflow-y-scroll max-h-[422px] rounded-t-2xl">
          <table className="w-full">
            <thead className="bg-gray-light-2 sticky top-0 z-10">
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

            <tbody className="bg-white border-gray-light-2 border-2 text-gray-darkest overflow-x-scroll">
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
                      {type === "expenses" ? "-" : ""}{" "}
                      {transaction.amount.toFixed(2)} UAH
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
      </div>

      <div className="block md:hidden divide-y-2 divide-gray-light-2 pb-16 w-full">
        {sortedTransactions &&
          sortedTransactions.map((transaction) => (
            <div
              key={transaction._id}
              className="flex items-center w-full text-gray-darkest py-4"
            >
              <div className="w-[60%]">
                <p className="font-bold text-sm">{transaction.description}</p>
                <div className="flex gap-8 text-[0.6rem]">
                  <p>{transaction.date}</p>
                  <p>{transaction.category}</p>
                </div>
              </div>
              <div className="w-[30%]">
                <div
                  className={`text-right text-sm font-bold ${
                    type === "expenses" ? "text-red" : "text-green"
                  }`}
                >
                  {type === "expenses" ? "-" : ""}{" "}
                  {transaction.amount.toFixed(2)} UAH
                </div>
              </div>
              <div className="w-[10%]">
                <button
                  onClick={() => onDelete(transaction._id)}
                  className="hover:bg-gray-light-2 rounded-full p-2 transition duration-200 ease-in-out"
                >
                  <Trash />
                  <span className="sr-only">Delete</span>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TransactionList;
