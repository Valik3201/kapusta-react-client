import { createSlice } from "@reduxjs/toolkit";
import {
  addIncome,
  getIncomeStats,
  addExpense,
  getExpenseStats,
  deleteTransaction,
  getIncomeCategories,
  getExpenseCategories,
  updateUserBalance,
  getPeriodData,
  getUserInfo,
} from "./operations";
import { refreshUser } from "../auth/operations";

const initialState = {
  balance: 0,
  incomeStats: {},
  expenseStats: {},
  incomeCategories: [],
  expenseCategories: [],
  periodData: null,
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Income
      .addCase(addIncome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.newBalance;
        if (!state.incomeStats.incomes) {
          state.incomeStats.incomes = [];
        }
        state.incomeStats.incomes.push(action.payload.transaction);
      })
      .addCase(addIncome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Income Stats
      .addCase(getIncomeStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIncomeStats.fulfilled, (state, action) => {
        state.loading = false;
        state.incomeStats = action.payload;
      })
      .addCase(getIncomeStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add Expense
      .addCase(addExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.newBalance;
        if (!state.expenseStats.expenses) {
          state.expenseStats.expenses = [];
        }
        state.expenseStats.expenses.push(action.payload.transaction);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Expense Stats
      .addCase(getExpenseStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpenseStats.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseStats = action.payload;
      })
      .addCase(getExpenseStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Transaction
      .addCase(deleteTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.newBalance;
        // Filter out deleted transaction from incomes and expenses
        if (state.incomeStats.incomes) {
          state.incomeStats.incomes = state.incomeStats.incomes.filter(
            (income) => income._id !== action.meta.arg
          );
        }
        if (state.expenseStats.expenses) {
          state.expenseStats.expenses = state.expenseStats.expenses.filter(
            (expense) => expense._id !== action.meta.arg
          );
        }
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Income Categories
      .addCase(getIncomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIncomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.incomeCategories = action.payload;
      })
      .addCase(getIncomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Expense Categories
      .addCase(getExpenseCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpenseCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseCategories = action.payload;
      })
      .addCase(getExpenseCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get User Balance
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (action.payload && action.payload.balance !== undefined) {
          state.balance = action.payload.balance;
        } else {
          state.balance = 0;
        }
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update User Balance
      .addCase(updateUserBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.newBalance;
      })
      .addCase(updateUserBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Period Data
      .addCase(getPeriodData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPeriodData.fulfilled, (state, action) => {
        state.loading = false;
        state.periodData = action.payload;
      })
      .addCase(getPeriodData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.balance;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionsSlice.reducer;
