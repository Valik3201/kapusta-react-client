import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledTabsDesktop, StyledTabsMobile } from "./Transactions.Styled";

export const TransactionsMobile = () => {
  return (
    <StyledTabsMobile>
      <Link to="/expenses" className="TransMobile">
        EXPENCES
      </Link>
      <Link to="/income" className="TransMobile">
        INCOME
      </Link>
    </StyledTabsMobile>
  );
};

export const TransactionsDesktop = () => {
  return (
    <StyledTabsDesktop>
      <NavLink to="expenses" className="TransDesktop">
        EXPENCES
      </NavLink>
      <NavLink to="income" className="TransDesktop">
        INCOME
      </NavLink>
    </StyledTabsDesktop>
  );
};
