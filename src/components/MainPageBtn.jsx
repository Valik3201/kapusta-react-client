import { Link } from "react-router-dom";
import ArrowLeft from "./Icons/ArrowLeft";

const MainPageBtn = () => {
  return (
    <div className="flex gap-4 items-center">
      <ArrowLeft />

      <Link
        to="/"
        className="text-gray-darkest/70 hover:text-orange transition duration-200 ease-in-out"
      >
        Main Page
      </Link>
    </div>
  );
};

export default MainPageBtn;
