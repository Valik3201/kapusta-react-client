import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundLog from '../../components/Background/BackgroundLog'; // Zaktualizuj ścieżkę do komponentu BackgroundLog
import Balance from '../../components/Balance'; // Zaktualizuj ścieżkę do komponentu Balance
import Expenses from '../../components/Expenses'; // Zaktualizuj ścieżkę do komponentu Expenses
import Income from '../../components/Income'; // Zaktualizuj ścieżkę do komponentu Income

const Home = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  return (
      <div>
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

        <div>
          <nav>
            <button onClick={() => setActiveTab("expenses")}>Expenses</button>
            <button onClick={() => setActiveTab("income")}>Income</button>
          </nav>
          <div>
            {activeTab === "expenses" && <Expenses />}
            {activeTab === "income" && <Income />}
          </div>
          <BackgroundLog />
        </div>
      </div>
  );
};

export default Home;