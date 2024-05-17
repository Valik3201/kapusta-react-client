import { useState } from "react";
import { useDispatch } from "react-redux";
import Calendar from "./Icons/Calendar";
import Calculator from "./Icons/Calculator";

const TransactionForm = ({ type, categories, addTransaction }) => {
  const dispatch = useDispatch();

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
    const transactionData = {
      ...form,
      amount: Number(form.amount),
    };
    dispatch(addTransaction(transactionData));
    setForm({
      date: getCurrentDate(),
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

  return (
    <div className="p-8 text-xs">
      <h1 className="sr-only">{type === "expenses" ? "Expenses" : "Income"}</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex md:items-center lg:justify-between gap-8 md:flex-col lg:flex-row "
      >
        <div className="w-full flex justify-between gap-8">
          <div className="flex gap-2.5 items-center">
            <Calendar />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="text-gray-darkest font-extrabold font-xs"
            />
          </div>

          <div className="flex border-gray-light-2 border-2 h-10 px-4 rounded-tl-3xl rounded-r-3xl">
            <input
              type="text"
              name="description"
              placeholder="Product description"
              value={form.description}
              onChange={handleChange}
              required
              className="border-gray-light-2 border-r-2 lg:w-[208px]"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="border-gray-light-2 border-r-2 w-[169px] pl-2"
            >
              <option value="">Product category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <div className="flex items-center w-[119px]">
              <input
                type="number"
                name="amount"
                placeholder="0,00"
                value={form.amount}
                onChange={handleChange}
                required
                className="text-right w-20"
              />
              <Calculator />
            </div>
          </div>
        </div>

        <div className="flex gap-4 h-10">
          <button
            type="submit"
            className="w-32 bg-orange text-white rounded-2xl uppercase font-bold"
          >
            Input
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-32 border-gray-light-2 border-2 text-gray-darkest rounded-2xl uppercase font-bold"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
