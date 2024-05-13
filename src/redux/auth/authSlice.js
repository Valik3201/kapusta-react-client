import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
  googleAuthUser,
} from './authOperations';

const onPending = state => {
  state.isLoading = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { id: null, email: null },
    token: null,
    sid: null,
    refreshToken: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, onPending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.userData.email;
        state.user.id = payload.userData.id;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, onPending)

      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.userData.email;
        state.user.id = payload.userData.id;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, onPending)
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.sid = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, onPending)
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.user.email = payload.email;

        Notiflix.Notify.success(
          `Welcome back, ${state.user.email}!`,
          notifySettings
        );
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = { email: null, id: null };
        state.token = null;
        state.isLoggedIn = false;
        state.refreshToken = null;
        state.sid = null;
      })
      .addCase(googleAuthUser.pending, onPending)
      .addCase(googleAuthUser.fulfilled, (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.user.email = payload.data.email;
        state.isLoading = false;
      })
      .addCase(googleAuthUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});