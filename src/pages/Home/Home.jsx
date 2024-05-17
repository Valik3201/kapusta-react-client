import { useState } from "react";
import { Link } from "react-router-dom";
import Balance from "../../components/Balance";
import Expenses from "../../components/ExpencesHome";
import Income from "../../components/IncomeHome";

const Home = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  return (
    <div className="bg-[#f2f5fc] rounded-bl-[110px] w-full h-72 md:h-[526px]">
      <div className="container mx-auto flex justify-between pt-10 items-center">
        <Balance />

        <div className="flex gap-4">
          <Link
            to="/reports"
            className="text-gray-darkest/70 hover:text-orange transition duration-200 ease-in-out"
          >
            Reports
          </Link>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <g clipPath="url(#clip0_19402_517)">
              <path
                d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z"
                fill="#52555F"
              />
            </g>
            <defs>
              <clipPath id="clip0_19402_517">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="hidden md:block md:mt-14 lg:mt-2 container mx-auto md:w-[704px] lg:w-[1098px]">
        <nav>
          <button
            onClick={() => setActiveTab("expenses")}
            className={`w-36 uppercase font-bold text-center py-4 rounded-t-3xl ${
              activeTab === "expenses" ? "bg-white text-orange" : "bg-[#FAFBFD]"
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => setActiveTab("income")}
            className={`w-36 uppercase font-bold text-center py-4 rounded-t-3xl ${
              activeTab === "income" ? "bg-white text-orange" : "bg-[#FAFBFD]"
            }`}
          >
            Income
          </button>
        </nav>
        <div className="bg-white rounded-[1.88rem] rounded-tl-none shadow-home md:h-[616px] lg:h-[580px]">
          {activeTab === "expenses" && <Expenses />}
          {activeTab === "income" && <Income />}
        </div>
      </div>

      <div className="relative lg:bg-desktop-cabbages bg-top-4 bg-no-repeat lg:bg-100% bottom-10 left-0 w-full h-[232px] -z-10"></div>
    </div>
  );
};

export default Home;
