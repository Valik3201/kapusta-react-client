import CategoryCard from "./CategoryCard";
import Alcohol from "./Icons/CategoriesIcons/Alcohol";
import Products from "./Icons/CategoriesIcons/Products";
import Entertaiment from "./Icons/CategoriesIcons/Entertaiment";
import Health from "./Icons/CategoriesIcons/Health";
import Transport from "./Icons/CategoriesIcons/Transport";
import Housing from "./Icons/CategoriesIcons/Housing";
import Technique from "./Icons/CategoriesIcons/Technique";
import Other from "./Icons/CategoriesIcons/Other";
import Education from "./Icons/CategoriesIcons/Education";
import Hobbies from "./Icons/CategoriesIcons/Hobbies";
import Communal from "./Icons/CategoriesIcons/Communal";

const Expenses = () => {
  return (
    <>
      {/* mobile */}
      <div className="block sm:hidden">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-x-4 border-b border-gray-light-3 pb-2">
            <CategoryCard
              amount="5 000.00"
              Icon={Products}
              category1="Products"
            />
            <CategoryCard
              amount="3 000.00"
              Icon={Alcohol}
              category1="Alcohol"
            />
            <CategoryCard
              amount="2 400.00"
              Icon={Entertaiment}
              category1="Entertaiment"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-4 border-b border-gray-light-3 pb-2">
            <CategoryCard amount="1 000.00" Icon={Health} category1="Health" />
            <CategoryCard
              amount="2 000.00"
              Icon={Transport}
              category1="Transport"
            />
            <CategoryCard
              amount="3 000.00"
              Icon={Housing}
              category1="Housing"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-4 border-b border-gray-light-3 pb-2">
            <CategoryCard
              amount="5 000.00"
              Icon={Technique}
              category1="Technique"
            />
            <CategoryCard
              amount="5 000.00"
              Icon={Communal}
              category1="Communal"
              category2="communications"
            />
            <CategoryCard
              amount="5 000.00"
              Icon={Hobbies}
              category1="Sports"
              category2="hobbies"
            />
          </div>
          <div className="grid grid-cols-2 border-b border-gray-light-3 pb-2 px-8">
            <CategoryCard
              amount="5 000.00"
              Icon={Education}
              category1="Education"
            />
            <CategoryCard amount="5 000.00" Icon={Other} category1="Other" />
          </div>
        </div>
      </div>

      {/*   desktop, tablet */}
      <div className=" hidden sm:block">
        <div className="flex flex-wrap items-start justify-center pb-2 pt-2 gap-5">
          <CategoryCard
            amount="5 000.00"
            Icon={Products}
            category1="Products"
          />
          <CategoryCard amount="3 000.00" Icon={Alcohol} category1="Alcohol" />
          <CategoryCard
            amount="2 400.00"
            Icon={Entertaiment}
            category1="Entertaiment"
          />
          <CategoryCard amount="1 000.00" Icon={Health} category1="Health" />
          <CategoryCard
            amount="2 000.00"
            Icon={Transport}
            category1="Transport"
          />
          <CategoryCard amount="3 000.00" Icon={Housing} category1="Housing" />
        </div>
        <div className="flex flex-wrap items-start justify-center pb-2 pt-2 gap-5">
          <CategoryCard
            amount="5 000.00"
            Icon={Technique}
            category1="Technique"
          />
          <CategoryCard
            amount="5 000.00"
            Icon={Communal}
            category1="Communal,"
            category2="communications"
          />
          <CategoryCard
            amount="5 000.00"
            Icon={Hobbies}
            category1="Sports,"
            category2="hobbies"
          />
          <CategoryCard
            amount="5 000.00"
            Icon={Education}
            category1="Education"
          />
          <CategoryCard amount="5 000.00" Icon={Other} category1="Other" />
        </div>
      </div>
    </>
  );
};

export default Expenses;
