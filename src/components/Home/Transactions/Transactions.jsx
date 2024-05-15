import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledTransMobile, StyledTransDesktop } from "./Transactions.Styled";

export const TransactionsMobile = () => {
    return (
        <StyledTransMobile>
            <Link to="/expenses" className="TransMobile">
                EXPENCES
            </Link>
            <Link to="/income" className="TransMobile">
                INCOME
            </Link>
        </StyledTransMobile>
    );
};

export const TransactionsDesktop = () => {
    return (
        <StyledTransDesktop>
            <NavLink to="expenses" className="TransDesktop">
                EXPENCES
            </NavLink>
            <NavLink to="income" className="TransDesktop">
                INCOME
            </NavLink>
        </StyledTransDesktop>
    );
};
