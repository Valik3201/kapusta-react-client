import { useState } from "react";
import { useAuth } from "../hooks";

const Balance = () => {
  const { user } = useAuth();

  const [setBalance] = useState("00.00");
  const [inputBalance, setInputBalance] = useState(user.balance);

  const handleChange = (e) => {
    setInputBalance(e.target.value);
  };

  const handleConfirm = () => {
    setBalance(inputBalance);
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
