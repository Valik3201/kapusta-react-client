import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";
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
import { useAuth } from "../hooks";

const Expenses = ({ period }) => {
  const { user } = useAuth();

  const [categoryAmounts, setCategoryAmounts] = useState({});

  useEffect(() => {
    if (user && user.transactions) {
      const filteredTransactions = user.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const [month, year] = period.split(" ");
        return (
          transactionDate.getMonth() + 1 ===
            new Date(`${month} 1`).getMonth() + 1 &&
          transactionDate.getFullYear() === parseInt(year)
        );
      });

      const amounts = filteredTransactions.reduce(
        (acc, { category, amount }) => {
          if (!acc[category]) {
            acc[category] = 0;
          }
          acc[category] += amount;
          return acc;
        },
        {}
      );

      setCategoryAmounts(amounts);
    }
  }, [period, user]);

  /* mocked data
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/src/db/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        const filteredTransactions = data.transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          const [month, year] = period.split(" ");
          return (
            transactionDate.getMonth() + 1 ===
              new Date(`${month} 1`).getMonth() + 1 &&
            transactionDate.getFullYear() === parseInt(year)
          );
        });
        const amounts = filteredTransactions.reduce(
          (acc, { category, amount }) => {
            if (!acc[category]) {
              acc[category] = 0;
            }
            acc[category] += amount;
            return acc;
          },
          {}
        );
        setCategoryAmounts(amounts);
      })
      .catch((error) => console.error("Error fetching the user data:", error));
  }, [period]);

  if (!user) {
    return (
      <div className="text-center text-3xl text-gray-darkest p-8">
        Loading...
      </div>
    );
  } */

  return (
    <>
      {/* mobile */}
      <div className="block sm:hidden">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-x-4 border-b border-gray-light-3 pb-2">
            <CategoryCard
              amount={(categoryAmounts["Products"] || 0).toFixed(2)}
              Icon={Products}
              category1="Products"
            />
            <CategoryCard
              amount={(categoryAmounts["Alcohol"] || 0).toFixed(2)}
              Icon={Alcohol}
              category1="Alcohol"
            />
            <CategoryCard
              amount={(categoryAmounts["Entertainment"] || 0).toFixed(2)}
              Icon={Entertainment}
              category1="Entertainment"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-4 border-b border-gray-light-3 pb-2">
            <CategoryCard
              amount={(categoryAmounts["Health"] || 0).toFixed(2)}
              Icon={Health}
              category1="Health"
            />
            <CategoryCard
              amount={(categoryAmounts["Transport"] || 0).toFixed(2)}
              Icon={Transport}
              category1="Transport"
            />
            <CategoryCard
              amount={(categoryAmounts["Housing"] || 0).toFixed(2)}
              Icon={Housing}
              category1="Housing"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-4 border-b border-gray-light-3 pb-2">
            <CategoryCard
              amount={(categoryAmounts["Technique"] || 0).toFixed(2)}
              Icon={Technique}
              category1="Technique"
            />
            <CategoryCard
              amount={(categoryAmounts["Communal"] || 0).toFixed(2)}
              Icon={Communal}
              category1="Communal"
              category2="communications"
            />
            <CategoryCard
              amount={(categoryAmounts["Hobbies"] || 0).toFixed(2)}
              Icon={Hobbies}
              category1="Sports"
              category2="hobbies"
            />
          </div>
          <div className="grid grid-cols-2 border-b border-gray-light-3 pb-2 px-8">
            <CategoryCard
              amount={(categoryAmounts["Education"] || 0).toFixed(2)}
              Icon={Education}
              category1="Education"
            />
            <CategoryCard
              amount={(categoryAmounts["Other"] || 0).toFixed(2)}
              Icon={Other}
              category1="Other"
            />
          </div>
        </div>
      </div>

      {/* desktop, tablet */}
      <div className="hidden sm:block">
        <div className="flex flex-wrap items-start justify-center pb-2 pt-2 gap-5">
          <CategoryCard
            amount={(categoryAmounts["Products"] || 0).toFixed(2)}
            Icon={Products}
            category1="Products"
          />
          <CategoryCard
            amount={(categoryAmounts["Alcohol"] || 0).toFixed(2)}
            Icon={Alcohol}
            category1="Alcohol"
          />
          <CategoryCard
            amount={(categoryAmounts["Entertainment"] || 0).toFixed(2)}
            Icon={Entertainment}
            category1="Entertainment"
          />
          <CategoryCard
            amount={(categoryAmounts["Health"] || 0).toFixed(2)}
            Icon={Health}
            category1="Health"
          />
          <CategoryCard
            amount={(categoryAmounts["Transport"] || 0).toFixed(2)}
            Icon={Transport}
            category1="Transport"
          />
          <CategoryCard
            amount={(categoryAmounts["Housing"] || 0).toFixed(2)}
            Icon={Housing}
            category1="Housing"
          />
        </div>
        <div className="flex flex-wrap items-start justify-center pb-2 pt-2 gap-5">
          <CategoryCard
            amount={(categoryAmounts["Technique"] || 0).toFixed(2)}
            Icon={Technique}
            category1="Technique"
          />
          <CategoryCard
            amount={(categoryAmounts["Communal"] || 0).toFixed(2)}
            Icon={Communal}
            category1="Communal"
            category2="communications"
          />
          <CategoryCard
            amount={(categoryAmounts["Hobbies"] || 0).toFixed(2)}
            Icon={Hobbies}
            category1="Sports"
            category2="hobbies"
          />
          <CategoryCard
            amount={(categoryAmounts["Education"] || 0).toFixed(2)}
            Icon={Education}
            category1="Education"
          />
          <CategoryCard
            amount={(categoryAmounts["Other"] || 0).toFixed(2)}
            Icon={Other}
            category1="Other"
          />
        </div>
      </div>
    </>
  );
};

Expenses.propTypes = {
  period: PropTypes.string.isRequired,
};

export default Expenses;
