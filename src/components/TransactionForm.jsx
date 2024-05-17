import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TransactionForm = ({ type, categories, getStats, addTransaction }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.transactions.loading);
  const error = useSelector((state) => state.transactions.error);

  const [form, setForm] = useState({
    date: getCurrentDate(),
    description: "",
    category: "",
    amount: "",
  });

  function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction(form));
    setForm({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  const handleClear = () => {
    setForm({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{type === "expenses" ? "Expenses" : "Income"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
        <button type="submit">Input</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
