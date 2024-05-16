import BackButton from "../../components/BackButton";
import Balance from "../../components/Balance";
import { Link } from "react-router-dom";
import CurrentPeriod from "../../components/CurrentPeriod";

const Reports = () => {
  return (
    <div>
      <div>
        <div className="bg-[#f2f5fc] rounded-bl-[110px] w-full h-72 md:h-[526px]">
          <div className="container mx-auto flex justify-between pt-10 items-center">
            <div className="flex gap-4 items-center">
              <BackButton />

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
              <CurrentPeriod />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
