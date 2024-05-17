import PropTypes from "prop-types";
import SwitchLeft from "./Icons/SwitchLeft";
import SwitchRight from "./Icons/SwitchRight";

const CurrentPeriod = ({ period, setPeriod }) => {
  const handlePrev = () => {
    const [month, year] = period.split(" ");
    const newDate = new Date(year, monthMap[month] - 1 - 1, 1);
    setPeriod(`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`);
  };

  const handleNext = () => {
    const [month, year] = period.split(" ");
    const newDate = new Date(year, monthMap[month] - 1 + 1, 1);
    setPeriod(`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthMap = monthNames.reduce((acc, month, index) => {
    acc[month] = index + 1;
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center h-full gap-2">
      <p className="text-gray-darkest/70 text-xs">Current period:</p>
      <div className="flex items-center gap-2">
        <div onClick={handlePrev}>
          <SwitchLeft />
        </div>
        <p className="text-center text-sm text-black text-sm font-bold uppercase leading-normal w-32">
          {period}
        </p>
        <div onClick={handleNext}>
          <SwitchRight />
        </div>
      </div>
    </div>
  );
};

CurrentPeriod.propTypes = {
  period: PropTypes.string.isRequired,
  setPeriod: PropTypes.func.isRequired,
};

export default CurrentPeriod;
