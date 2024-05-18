import React from "react";
import css from "./Background.module.css";

const Background = () => {
  return (
    <div className={css.background}>
      <div className={css.background_multicabbage}></div>
      <div className={css.logo}></div>
      <div className={css.background_image2}></div>
    </div>
    
  );
};

export default Background;
