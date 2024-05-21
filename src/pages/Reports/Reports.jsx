import { useState, useEffect } from "react";
import Balance from "../../components/Balance";
import SelectedPeriod from "../../components/SelectedPeriod";
import ExpensesIncomeBar from "../../components/ExpensesIncomeBar";
import MainPageBtn from "../../components/MainPageBtn";
import Footer from "../../components/Footer";
import ExpensesReports from "../../components/ExpensesReports";
import IncomeReports from "../../components/IncomeReports";
import SwitchLeft from "../../components/Icons/SwitchLeft";
import SwitchRight from "../../components/Icons/SwitchRight";
import { getCurrentPeriod } from "../../helpers/getCurrentPeriod";
import BarChart from "../../components/BarChart";
import { useMediaQuery } from "react-responsive";

const Reports = () => {
  const [dataType, setDataType] = useState("expenses");
  const [period, setPeriod] = useState(getCurrentPeriod());
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setPeriod(getCurrentPeriod());
  }, []);

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
          <SelectedPeriod period={period} setPeriod={setPeriod} />
        </div>
        <ExpensesIncomeBar period={period} />
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
          {dataType === "expenses" && <ExpensesReports period={period} />}
          {dataType === "income" && <IncomeReports period={period} />}
        </div>
        <BarChart period={period} dataType={dataType} />

        {!isMobile && <Footer />}
      </div>
    </div>
  );
};

export default Reports;
