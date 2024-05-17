import CategoryCard from "./CategoryCard";
import AddIncome from "./Icons/CategoriesIcons/AddIncome";
import Salary from "./Icons/CategoriesIcons/Salary";

const Income = () => {
  return (
    <div className="flex flex-wrap items-start justify-stretch pb-2 pt-2 gap-5 pb-2 border-b border-gray-light-3 sm:border-none">
      <CategoryCard amount="5 000.00" Icon={Salary} category1="Salary" />
      <CategoryCard amount="5 000.00" Icon={AddIncome} category1="Add Income" />
    </div>
  );
};

export default Income;
