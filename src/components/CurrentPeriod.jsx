import SwitchLeft from "./Icons/SwitchLeft";
import SwitchRight from "./Icons/SwitchRight";

const CurrentPeriod = () => {
  return (
    <div className="flex flex-col items-center h-full gap-2">
      <p className="text-gray-darkest/70 text-xs">Current period:</p>
      <div className="flex items-center gap-2">
        <SwitchLeft />
        <p className="text-center text-sm text-black text-sm font-bold uppercase leading-normal">
          November 2019
        </p>
        <SwitchRight />
      </div>
    </div>
  );
};

export default CurrentPeriod;
