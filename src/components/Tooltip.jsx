import React from "react";

const Tooltip = ({ message1, message2, children }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute left-200 top-full left-1 mt-2 flex flex-col items-center hidden group-hover:flex">
        <span className="relative z-10000 w-72 h-40 p-8 text-white whitespace-pre-wrap bg-gradient-to-br from-blue-800 to-blue-950 shadow-lg rounded-3xl">
          <div
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              textAlign: "left",
            }}
          >
            {message1}
          </div>
          <br />
          <div
            style={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "16px",
              textAlign: "left",
            }}
          >
            {message2}
          </div>
          <div
            className="absolute top-0 left-10 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-blue-800"
            style={{ transform: "translateY(-100%) translateX(-25%)" }}
          ></div>
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
