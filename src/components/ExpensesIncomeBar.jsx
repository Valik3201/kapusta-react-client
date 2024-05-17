import DividerV from "./Icons/DividerV";

const ExpensesIncomeBar = () => {
  return (
    <div className="container mx-auto flex gap-4 justify-center items-center mt-10 pb-2 pt-2 bg-white rounded-full ">
      <div className="flex gap-4">
        <p className="text-center text-black text-sm font-bold leading-normal">
          Expenses:
        </p>
        <p className="text-center text-red text-sm font-bold leading-normal">
          - 18 000 UAH.
        </p>
      </div>
      <DividerV />
      <div className="flex gap-4">
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
