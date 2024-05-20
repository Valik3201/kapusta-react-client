import { useState } from "react";
import Balance from "../../components/Balance";
import CurrentPeriod from "../../components/CurrentPeriod";
import ExpensesIncomeBar from "../../components/ExpensesIncomeBar";
import MainPageBtn from "../../components/MainPageBtn";
import Footer from "../../components/Footer";
import ExpensesReports from "../../components/ExpensesReports";
import IncomeReports from "../../components/IncomeReports";
import SwitchLeft from "../../components/Icons/SwitchLeft";
import SwitchRight from "../../components/Icons/SwitchRight";

const Reports = () => {
  const [dataType, setDataType] = useState("expenses");

  const handleSwitch = () => {
    setDataType((prevType) =>
      prevType === "expenses" ? "income" : "expenses"
    );
  };

  return (
    <div className="bg-[#f2f5fc] rounded-bl-[110px] w-full h-72 md:h-[526px]">
      <div className="p-8">
        <div className="sm:hidden block">
          <MainPageBtn />
        </div>
        <div className="container mx-auto gap-8 flex flex-col-reverse justify-between items-center sm:flex-row">
          <div className="hidden sm:block">
            <MainPageBtn />
          </div>
          <Balance />
          <CurrentPeriod />
        </div>
        <ExpensesIncomeBar />
        <div className="container mx-auto flex flex-col gap-4 justify-center items-center mt-10 pb-6 sm:pt-3 bg-white rounded-3xl shadow-none sm:shadow-form">
          <div
            className="flex items-center justify-center gap-10 pb-2 pt-3 hover:cursor-pointer"
            onClick={handleSwitch}
          >
            <SwitchLeft />
            <p className="text-center text-black text-sm font-bold uppercase leading-normal">
              {dataType === "expenses" ? "Expenses" : "Income"}
            </p>
            <SwitchRight />
          </div>
          {dataType === "expenses" && <ExpensesReports />}
          {dataType === "income" && <IncomeReports />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Reports;
