import { useDispatch, useSelector } from "react-redux";
import {
  selectPeriodData,
  selectLoading,
} from "../redux/transactions/selectors";
import { getPeriodData } from "../redux/transactions/operations";
import SwitchLeft from "./Icons/SwitchLeft";
import SwitchRight from "./Icons/SwitchRight";
import Spinner from "./Spinner";
import { useEffect } from "react";

const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const periodData = useSelector(selectPeriodData);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (!periodData) {
      const currentPeriod = `${new Date().getFullYear()}-${String(
        new Date().getMonth() + 1
      ).padStart(2, "0")}`;
      dispatch(getPeriodData(currentPeriod));
    }
  }, [dispatch, periodData]);

  console.log("periodData from currentperiod =>", periodData);

  const handlePrev = () => {
    if (!periodData) return;
    const [year, month] = periodData.split("-");
    const newDate = new Date(year, month - 1 - 1, 1);
    const newPeriod = `${newDate.getFullYear()}-${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}`;
    dispatch(getPeriodData(newPeriod));
  };

  const handleNext = () => {
    if (!periodData) return;
    const [year, month] = periodData.split("-");
    const newDate = new Date(year, month - 1 + 1, 1);
    const newPeriod = `${newDate.getFullYear()}-${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}`;
    dispatch(getPeriodData(newPeriod));
  };

  if (loading) return <Spinner />;

  return (
    <div className="flex flex-col items-center h-full gap-2">
      <p className="text-gray-darkest/70 text-xs">Current period:</p>
      <div className="flex items-center gap-2">
        <div onClick={handlePrev}>
          <SwitchLeft />
        </div>
        <p className="text-center text-sm text-black text-sm font-bold uppercase leading-normal w-32">
          {periodData ? periodData : "No data"}
        </p>
        <div onClick={handleNext}>
          <SwitchRight />
        </div>
      </div>
    </div>
  );
};

export default CurrentPeriod;
