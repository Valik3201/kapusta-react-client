import { useState } from "react";
import { useAuth } from "../hooks";

const Balance = () => {
  const { user } = useAuth();

  const [balance, setBalance] = useState("00.00");
  const [inputBalance, setInputBalance] = useState(user.balance);

  const handleChange = (e) => {
    setInputBalance(e.target.value);
  };

  const handleConfirm = () => {
    setBalance(inputBalance);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-auto sm:flex-row">
      <p className="font-medium text-gray-darkest/70 text-xs">Balance:</p>

      <input
        type="number"
        value={inputBalance}
        onChange={handleChange}
        placeholder="00.00"
        className="w-40 sm:w-32 bg-transparent border-4 rounded-2xl p-4 text-right border-white text-black font-bold text-xs sm:rounded-2xl rounded-full "
      />

      <button
        onClick={handleConfirm}
        className="w-32 bg-transparent border-4 rounded-2xl p-4 border-white text-gray-darkest/70 uppercase hover:text-gray-darkest transition duration-200 ease-in-out hidden sm:block text-xs"
      >
        Confirm
      </button>
    </div>
  );
};

export default Balance;
