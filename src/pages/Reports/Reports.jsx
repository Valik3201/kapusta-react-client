import Balance from "../../components/Balance";
import BarChart from "../../components/BarChart";
import CurrentPeriod from "../../components/CurrentPeriod";
import Expenses from "../../components/Expenses";
import ExpensesIncomeBar from "../../components/ExpensesIncomeBar";
import MainPageBtn from "../../components/MainPageBtn";
import Income from "../../components/Income";
import SwitchLeft from "../../components/Icons/SwitchLeft";
import SwitchRight from "../../components/Icons/SwitchRight";
import { useState } from "react";
import Footer from "../../components/Footer";

const expencesData = [
  { label: "Pork", value: 100 },
  { label: "Beef", value: 1000 },
  { label: "Chiken", value: 600 },
  { label: "Fish", value: 800 },
  { label: "Panini", value: 220 },
  { label: "Coffee", value: 350 },
  { label: "Spaghetti", value: 230 },
  { label: "Chocolate", value: 200 },
  { label: "Olives", value: 300 },
  { label: "Greens", value: 300 },
];

const incomeData = [
  { label: "Salary", value: 5000 },
  { label: "Add Income", value: 5000 },
];

const Reports = () => {
  const [dataType, setDataType] = useState("expenses");
  const data = dataType === "expenses" ? expencesData : incomeData;

  const handleSwitch = () => {
    setDataType((prevType) =>
      prevType === "expenses" ? "income" : "expenses"
    );
  };

  return (
    <div className="bg-[#f2f5fc] rounded-bl-[110px] w-full h-72 md:h-[526px]">
      <div className="p-8 ">
        <div className="sm:hidden block">
          <MainPageBtn />
        </div>
        <div className="container mx-auto gap-8 flex flex-col-reverse justify-between sm:pt-10 items-center sm:flex-row ">
          <div className="hidden sm:block">
            {" "}
            <MainPageBtn />
          </div>

          <Balance />
          <CurrentPeriod />
        </div>

        <ExpensesIncomeBar />
        <div className="container mx-auto flex flex-col gap-4 justify-center items-center mt-10 pb-6 sm:pt-3 bg-white rounded-3xl shadow-none sm:shadow-form ">
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
          {dataType === "expenses" && <Expenses />}
          {dataType === "income" && <Income />}
        </div>

        <BarChart data={data} className="z-10" />
        <Footer />
      </div>
    </div>
  );
};

export default Reports;
