import { useState } from "react";
import Trash from "./Icons/Trash";

const Modal = ({ type, handleConfirm, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleYes = () => {
    handleConfirm();
    closeModal();
  };

  return (
    <>
      {type === "logout" && (
        <>
          <button
            onClick={openModal}
            className="pl-4 underline hover:text-orange transition duration-200 ease-in-out hidden md:block"
          >
            Exit
          </button>
          <button className="md:hidden" onClick={openModal}>
            <span className="sr-only">Exit</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_19406_1192)">
                <path
                  d="M9.99998 14H1.99998V1.99998H9.99998V2.99998H12V0H0V16H12V13H10V14H9.99998Z"
                  fill="#CBCCD0"
                />
                <path
                  d="M12.293 4.29297L10.8789 5.70702L12.1719 6.99998H7V8.99999H12.1719L10.8789 10.293L12.293 11.707L16 7.99997L12.293 4.29297Z"
                  fill="#CBCCD0"
                />
              </g>
              <defs>
                <clipPath id="clip0_19406_1192">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </>
      )}

      {type === "confirm" && (
        <>
          <button
            onClick={openModal}
            className="hover:bg-gray-light-2 rounded-full p-2 transition duration-200 ease-in-out"
          >
            <Trash />
            <span className="sr-only">Delete</span>
          </button>
        </>
      )}

      {isOpen && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/30">
          <div className="relative p-4 w-96 max-h-full">
            <div className="relative bg-white shadow py-8 px-14 rounded-3xl">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L13 13" stroke="#52555F" strokeWidth="2" />
                  <path
                    d="M1 13L13 0.999999"
                    stroke="#52555F"
                    strokeWidth="2"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="flex items-center justify-center pb-5">
                <p className="text-sm font-medium text-gray-darkest">
                  {message}
                </p>
              </div>

              <div className="grid grid-cols-2 items-center gap-4">
                <button
                  onClick={handleYes}
                  type="button"
                  className="text-white uppercase bg-orange hover:bg-orange/90 focus:ring-4 focus:outline-none focus:ring-orange/50 font-medium rounded-2xl text-sm px-5 py-2.5 text-center transition duration-200 ease-in-out"
                >
                  Yes
                </button>

                <button
                  onClick={closeModal}
                  type="button"
                  className="py-2.5 px-5 text-sm uppercase font-medium text-gray-darkest focus:outline-none bg-white rounded-2xl border-2 border-gray-light-2 hover:bg-gray-light-2/30 hover:text-orange focus:z-10 focus:ring-4 focus:ring-gray-light transition duration-200 ease-in-out"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
