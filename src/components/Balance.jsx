import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "../redux/transactions/selectors";
import { updateUserBalance } from "../redux/transactions/operations";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [inputBalance, setInputBalance] = useState(balance);

  useEffect(() => {
    setInputBalance(balance);
  }, [balance]);

  const handleChange = (e) => {
    setInputBalance(parseFloat(e.target.value));
  };

  const handleConfirm = () => {
    dispatch(updateUserBalance());
  };

  return (
    <div className="flex gap-4 justify-center items-center mx-auto">
      <p className="font-medium text-gray-darkest/70">Balance:</p>

      <input
        type="number"
        value={inputBalance}
        onChange={handleChange}
        placeholder="00.00"
        className="w-32 bg-transparent border-4 rounded-2xl p-4 text-right border-white text-black font-bold"
      />

      <button
        onClick={handleConfirm}
        className="w-32 bg-transparent border-4 rounded-2xl p-4 border-white text-gray-darkest/70 uppercase hover:text-gray-darkest transition duration-200 ease-in-out"
      >
        Confirm
      </button>
    </div>
  );
};

export default Balance;
