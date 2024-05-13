import Balance from "../../components/Balance";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Home;
