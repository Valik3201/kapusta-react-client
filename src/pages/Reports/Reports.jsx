import { useState, useEffect } from "react";
import Balance from "../../components/Balance";
import BarChart from "../../components/BarChart";
import CurrentPeriod from "../../components/CurrentPeriod";
import Expenses from "../../components/Expenses";
import ExpensesIncomeBar from "../../components/ExpensesIncomeBar";
import MainPageBtn from "../../components/MainPageBtn";
import Income from "../../components/Income";
import SwitchLeft from "../../components/Icons/SwitchLeft";
import SwitchRight from "../../components/Icons/SwitchRight";
import Footer from "../../components/Footer";
import { expensesData, incomeData } from "../../db/data";
import { getPeriodData } from "../../redux/transactions/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectPeriodData } from "../../redux/transactions/selectors";
import { getCurrentPeriod } from "../../helpers/getCurrentPeriod";

const Reports = () => {
  const [dataType, setDataType] = useState("expenses");
  const [period, setPeriod] = useState(getCurrentPeriod());

  const dispatch = useDispatch();
  const periodData = useSelector(selectPeriodData);

  console.log(periodData);

  useEffect(() => {
    const [month, year] = period.split(" ");
    const monthIndex = (
      "0" +
      (new Date(`${month} 1, ${year}`).getMonth() + 1)
    ).slice(-2);
    dispatch(getPeriodData(`${year}-${monthIndex}`));
  }, [dispatch, period]);

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
        <div className="container mx-auto gap-8 flex flex-col-reverse justify-between items-center sm:flex-row ">
          <div className="hidden sm:block">
            <MainPageBtn />
          </div>
          <Balance />
          <CurrentPeriod period={period} setPeriod={setPeriod} />
        </div>

        {periodData && (
          <ExpensesIncomeBar
            expenseTotal={periodData.expenses.expenseTotal}
            incomeTotal={periodData.incomes.incomeTotal}
          />
        )}

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
          {dataType === "expenses" && <Expenses period={period} />}
          {dataType === "income" && <Income period={period} />}
        </div>

        <BarChart
          data={dataType === "expenses" ? expensesData : incomeData}
          className="z-10"
        />

        <Footer />
      </div>
    </div>
  );
};

export default Reports;
