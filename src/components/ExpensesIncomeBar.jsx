import DividerV from "./Icons/DividerV";

const ExpensesIncomeBar = () => {
  return (
    <div className="container mx-auto flex sm:gap-4 justify-evenly sm:justify-center items-center mt-10 py-2 bg-white rounded-3xl sm:rounded-full shadow-form ">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Expenses:
        </p>
        <p className="text-center text-red text-sm font-bold leading-normal">
          - 18 000 UAH.
        </p>
      </div>
      <DividerV />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Income:
        </p>
        <p className="text-center text-green text-sm font-bold leading-normal">
          + 45 000 UAH.
        </p>
      </div>
    </div>
  );
};

export default ExpensesIncomeBar;
