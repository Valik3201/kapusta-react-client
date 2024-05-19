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
    <div className="py-8 md:px-8 text-xs">
      <h1 className="sr-only">{type === "expenses" ? "Expenses" : "Income"}</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex md:items-center lg:justify-between gap-8 flex-col lg:flex-row"
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
          <div className="flex gap-2.5 items-center justify-center">
            <Calendar />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="text-gray-darkest font-extrabold font-xs bg-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="flex flex-col md:flex-row border-gray-light-2 border-b-0 md:border-b-2">
              <input
                type="text"
                name="description"
                placeholder="Product description"
                value={form.description}
                onChange={handleChange}
                required
                className="ps-4 border-gray-light-2 border-t-2 border-r-2 border-l-2 border-b-2 md:border-b-0 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none lg:w-[148px] xl:w-[208px] h-10 bg-transparent placeholder-[#C7CCDC]"
              />

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="ps-3 border-gray-light-2 border-r-2 border-l-2 md:border-l-0 md:border-r-0 border-b-2 md:border-b-0 md:border-t-2 rounded-br-3xl md:rounded-br-none md:ps-0 md:w-[169px] h-10 bg-transparent text-[#C7CCDC]"
              >
                <option value="">Product category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mx-auto flex items-center justify-center w-[183px] md:w-[119px] border-gray-light-2 border-2 rounded-3xl md:rounded-none md:rounded-r-3xl">
              <input
                type="number"
                name="amount"
                placeholder="0.00"
                value={form.amount}
                onChange={handleChange}
                required
                className="text-center w-[125px] md:text-right md:w-12 border-gray-light-2 border-r-2 md:border-r-0 bg-transparent h-10 placeholder-black font-bold md:font-normal md:placeholder-[#C7CCDC]"
              />
              <div className="w-[60px] md:w-auto flex justify-center">
                <Calculator />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 h-10 justify-center">
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
