import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';

export const getStatistics = createAsyncThunk(
  'stats/getStatistics',
  async ({ period }, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `transaction/period-data?date=${period}`
      );
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue('Not founded!');
    }
  }
);