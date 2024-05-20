import PropTypes from "prop-types";
import SwitchLeft from "./Icons/SwitchLeft";
import SwitchRight from "./Icons/SwitchRight";
import monthNames from "../helpers/monthNames";

const SelectedPeriod = ({ period, setPeriod }) => {
  const monthMap = monthNames.reduce((acc, month, index) => {
    acc[month] = index + 1;
    return acc;
  }, {});

  const handlePrev = () => {
    if (!period) return;
    const [month, year] = period.split(" ");
    const newDate = new Date(year, monthMap[month] - 1 - 1, 1);
    setPeriod(`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`);
  };

  const handleNext = () => {
    if (!period) return;
    const [month, year] = period.split(" ");
    const newDate = new Date(year, monthMap[month] - 1 + 1, 1);
    setPeriod(`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`);
  };

  return (
    <div className="flex flex-col items-center h-full gap-2">
      <p className="text-gray-darkest/70 text-xs">Current period:</p>
      <div className="flex items-center gap-2">
        <div onClick={handlePrev} className="cursor-pointer">
          <SwitchLeft />
        </div>
        <p className="text-center text-sm text-black font-bold uppercase leading-normal w-32">
          {period || "Loading..."}
        </p>
        <div onClick={handleNext} className="cursor-pointer">
          <SwitchRight />
        </div>
      </div>
    </div>
  );
};

SelectedPeriod.propTypes = {
  period: PropTypes.string.isRequired,
  setPeriod: PropTypes.func.isRequired,
};

export default SelectedPeriod;
