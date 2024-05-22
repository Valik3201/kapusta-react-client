import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import Spinner from "./Spinner";
import { selectError, selectLoading } from "../redux/transactions/selectors";
// category icons
import Alcohol from "./Icons/CategoriesIcons/Alcohol";
import Products from "./Icons/CategoriesIcons/Products";
import Entertainment from "./Icons/CategoriesIcons/Entertainment";
import Health from "./Icons/CategoriesIcons/Health";
import Transport from "./Icons/CategoriesIcons/Transport";
import Housing from "./Icons/CategoriesIcons/Housing";
import Technique from "./Icons/CategoriesIcons/Technique";
import Other from "./Icons/CategoriesIcons/Other";
import Education from "./Icons/CategoriesIcons/Education";
import Hobbies from "./Icons/CategoriesIcons/Hobbies";
import Communal from "./Icons/CategoriesIcons/Communal";
import AddIncome from "./Icons/CategoriesIcons/AddIncome";
import Salary from "./Icons/CategoriesIcons/Salary";
import monthNames from "../helpers/monthNames";

const ReportsManager = ({
  type,
  period,
  getStats,
  getCategories,
  selectCategories,
  selectStats,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const categories = useSelector(selectCategories);
  const stats = useSelector(selectStats);
  const [categoryAmounts, setCategoryAmounts] = useState({});

  useEffect(() => {
    dispatch(getStats());

    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length, getStats, getCategories]);

  const transactions = useMemo(() => {
    if (stats) {
      const [month, year] = period.split(" ");
      return (
        type === "expenses" || type === "expenseReports"
          ? stats.expenses
          : stats.incomes
      ).filter(
        (transaction) =>
          new Date(transaction.date).getMonth() + 1 ===
            monthNames.indexOf(month) + 1 &&
          new Date(transaction.date).getFullYear() === parseInt(year)
      );
    }
    return [];
  }, [stats, type, period]);

  useEffect(() => {
    const amounts = transactions.reduce((acc, { category, amount }) => {
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += amount;
      return acc;
    }, {});

    setCategoryAmounts(amounts);
  }, [transactions]);

  const renderCategoryCard = (amount, Icon, name) => {
    let category1, category2;

    if (name === "Communal and Communications") {
      category1 = "Communal and";
      category2 = "Communications";
    } else {
      [category1, category2] = name.split(" ");
    }
    if (amount !== 0) {
      return (
        <CategoryCard
          key={name}
          amount={amount.toFixed(2)}
          Icon={Icon}
          category1={category1}
          category2={category2}
        />
      );
    } else {
      return null;
    }
  };

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  const expenseCategories = [
    { name: "Products", Icon: Products },
    { name: "Alcohol", Icon: Alcohol },
    { name: "Entertainment", Icon: Entertainment },
    { name: "Health", Icon: Health },
    { name: "Transport", Icon: Transport },
    { name: "Housing", Icon: Housing },
    { name: "Technique", Icon: Technique },
    {
      name: "Communal and Communications",
      Icon: Communal,
    },
    { name: "Hobbies Sports", Icon: Hobbies },
    { name: "Education", Icon: Education },
    { name: "Other", Icon: Other },
  ];

  const incomeCategories = [
    { name: "Salary", Icon: Salary },
    { name: "Add Income", Icon: AddIncome },
  ];

  const categoriesToRender =
    type === "expenses" || type === "expenseReports"
      ? expenseCategories
      : incomeCategories;

  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-wrap gap-4 px-16 align-center justify-center">
          {categoriesToRender.map(({ name, Icon, category2 }) =>
            renderCategoryCard(
              categoryAmounts[name] || 0,
              Icon,
              name,
              category2
            )
          )}
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="grid grid-cols-3 py-2 gap-5">
          {categoriesToRender.map(({ name, Icon, category2 }) =>
            renderCategoryCard(
              categoryAmounts[name] || 0,
              Icon,
              name,
              category2
            )
          )}
        </div>
      </div>
    </>
  );
};

ReportsManager.propTypes = {
  type: PropTypes.oneOf(["expenses", "incomes", "expenseReports"]).isRequired,
  period: PropTypes.string.isRequired,
  getStats: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  selectCategories: PropTypes.func.isRequired,
  selectStats: PropTypes.func.isRequired,
};

export default ReportsManager;
