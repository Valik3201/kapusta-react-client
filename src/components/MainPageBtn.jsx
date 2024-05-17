import { Link } from "react-router-dom";
import ArrowLeft from "./Icons/ArrowLeft";

const MainPageBtn = () => {
  return (
    <Link to="/" className="flex gap-4 items-center hover:pointer ">
      <ArrowLeft />
      <p className="text-gray-darkest/70 hover:text-orange transition duration-200 ease-in-out text-xs hidden sm:block">
        Main Page
      </p>
    </Link>
  );
};

export default MainPageBtn;
