const TransactionList = ({ transactions, onDelete }) => {
  const sortedTransactions = transactions.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {sortedTransactions &&
          sortedTransactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => onDelete(transaction._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
