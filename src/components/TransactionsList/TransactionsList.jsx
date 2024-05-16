import { useDispatch, useSelector } from "react-redux";
import { selectAllTransactions } from "../../redux/transaction/selectors";
import { deleteTransaction } from "../../redux/transaction/operations";
import {
    ItemName,
    ItemNameCont,
    ItemDate,
    ItemDateCont,
    ItemStyled,
    ItemCategory,
    Sum,
    SumCont,
} from "./TransactionsList.styled";

export const TransactionsList = () => {
    const allTransactions = useSelector(selectAllTransactions);
    const dispatch = useDispatch();
    const sortedTransactions = allTransactions.slice().sort((a, b) => {
        const first = new Date(a.date).getTime();
        const second = new Date(b.date).getTime();
        if (first - second === 0) {
            return first;
        }
        return second - first;
    });
    const handleDelete = (event) => {
        dispatch(deleteTransaction(event.currentTarget.id));
    };
    return (
        <ItemStyled key={_id}>
            <ItemNameCont>
                <ItemName>{description}</ItemName>
                <ItemDateCont>
                    <ItemDate>{date.split("-").reverse().join(".")}</ItemDate>
                    <ItemCategory>{/* ??? */}</ItemCategory>
                </ItemDateCont>
            </ItemNameCont>
            <SumCont>
                <Sum style={{ color }} className="sum">
                    {amount}.00 UAH.
                </Sum>
                <span
                    id={_id}
                    onClick={handleDelete}
                    style={{ cursor: "pointer" }}
                ></span>
            </SumCont>
        </ItemStyled>
    );
};
