import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "../redux/transactions/selectors";
import { updateUserBalance } from "../redux/transactions/operations";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance).toFixed(2);

  const [inputBalance, setInputBalance] = useState(balance);

  useEffect(() => {
    setInputBalance(balance);
  }, [balance]);

  const handleChange = (e) => {
    setInputBalance(e.target.value);
  };

  const handleConfirm = () => {
    dispatch(updateUserBalance(Number(inputBalance)));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between lg:justify-center items-center lg:mx-auto w-full md:w-fit px-4 md:px-0">
      <p className="font-medium text-gray-darkest/70">Balance:</p>

      <div className="flex md:gap-4 min-w-full">
        <input
          type="number"
          value={inputBalance}
          onChange={handleChange}
          placeholder="00.00"
          className="w-full md:w-32 bg-transparent border-4 border-r-0 md:border-r-4 rounded-l-full md:rounded-2xl p-4 text-center border-white text-black font-bold"
        />

        <button
          onClick={handleConfirm}
          className="w-full md:w-32 bg-transparent border-4 rounded-r-full md:rounded-2xl p-4 border-white text-gray-darkest/70 uppercase hover:text-white hover:bg-orange hover:border-orange transition duration-200 ease-in-out"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Balance;
