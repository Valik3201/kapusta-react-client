import React, { useState } from "react";
import { Button } from "reactstrap";

const CurrentPeriod = ({ period, setPeriod }) => {
  const handlePrevious = () => {
    const newPeriod = new Date(period);
    newPeriod.setMonth(newPeriod.getMonth() - 1);
    setPeriod(newPeriod);
  };

  const handleNext = () => {
    const newPeriod = new Date(period);
    newPeriod.setMonth(newPeriod.getMonth() + 1);
    setPeriod(newPeriod);
  };

  return (
    <div className="d-flex align-items-center">
      <Button onClick={handlePrevious}>
        <svg
          width="4"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19 32"
        >
          <path
            fill="none"
            stroke="#ff751d"
            style="stroke:var(--color1, #ff751d)"
            d="M16 2.667 5.333 16 16 29.333"
          />
        </svg>
      </Button>
      <span className="mx-3">
        {period.toLocaleString("default", { month: "long", year: "numeric" })}
      </span>
      <Button onClick={handleNext}>
        <svg
          width="4"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19 32"
        >
          <path
            fill="none"
            stroke="#ff751d"
            style="stroke:var(--color1, #ff751d)"
            d="M2.667 2.667 13.334 16 2.667 29.333"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CurrentPeriod;
