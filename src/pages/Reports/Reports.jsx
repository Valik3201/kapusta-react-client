import Balance from "../../components/Balance";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div>
      <div>
        <div className="bg-[#f2f5fc] rounded-bl-[110px] w-full h-72 md:h-[526px]">
          <div className="container mx-auto flex justify-between pt-10 items-center">
            <div className="flex gap-4 items-center">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
                  fill="#FF751D"
                />
              </svg>

              <Link
                to="/"
                className="text-gray-darkest/70 hover:text-orange transition duration-200 ease-in-out"
              >
                Main Page
              </Link>
            </div>

            <Balance />

            <div>
              <p className="text-gray-darkest/70">Current period:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
