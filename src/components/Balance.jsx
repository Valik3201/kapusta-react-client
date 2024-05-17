
import { useEffect, useState } from "react";

const Balance = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState("00.00");
  const [inputBalance, setInputBalance] = useState("00.00");

  useEffect(() => {
    fetch("/src/db/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setBalance(data.balance);
        setInputBalance(data.balance);
      })
      .catch((error) => console.error("Error fetching the user data:", error));
  }, []);


  const handleChange = (e) => {
    setInputBalance(e.target.value);
  };

  const handleConfirm = () => {
    dispatch(updateUserBalance(Number(inputBalance)));
  };

  if (!user) {
    return (
      <div className="text-center text-3xl text-gray-darkest">Loading...</div>
    );
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-auto sm:flex-row ">
      <p className="font-medium text-gray-darkest/70 text-xs">Balance:</p>

      <div className="relative w-40 sm:w-32">
        <input
          type="number"
          value={inputBalance}
          onChange={handleChange}
          placeholder="00.00"
          className="w-full bg-transparent border-4 rounded-2xl p-4 pr-10 text-right border-white text-black font-bold text-xs sm:rounded-2xl rounded-full"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black font-bold text-xs">
          UAH
        </span>
      </div>

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
