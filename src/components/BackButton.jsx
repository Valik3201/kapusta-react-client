import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Button onClick={handleClick}>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
          fill="#FF751D"
        />
      </svg>
    </Button>
  );
};

export default BackButton;
