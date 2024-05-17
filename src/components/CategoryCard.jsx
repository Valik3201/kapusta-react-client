import PropTypes from "prop-types";

const CategoryCard = ({ amount, Icon, category1, category2 }) => {
  return (
    <div className="flex flex-col items-center p-2 hover:text-orange transition duration-200 ease-in-out">
      <p className="text-xs text-gray-darkest-400">{amount}</p>
      <div className="flex items-center justify-center w-16 h-16 my-2 relative ">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon />
        </div>
        <div className="h-12 w-14 rounded-3xl bg-gray-light hover:bg-orange transition duration-200 ease-in-out"></div>
      </div>

      <div className="category-container flex flex-col justify-center items-center">
        <p className="text-xs uppercase text-gray-darkest-400">{category1}</p>
        <p className="text-xs uppercase text-gray-darkest-400">{category2}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  amount: PropTypes.string,
  Icon: PropTypes.elementType,
  category1: PropTypes.string,
  category2: PropTypes.string,
};

export default CategoryCard;
