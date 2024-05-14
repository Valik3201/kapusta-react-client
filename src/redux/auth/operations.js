import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";

axios.defaults.baseURL = "https://kapusta-backend.goit.global";

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      console.log("Registration successful:", credentials);
      return res.data;
    } catch (error) {
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue("This email is already in use");
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      console.log("Login successful:", credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      if (error.response.status === 403) {
        return thunkAPI.rejectWithValue(
          "Email doesn't exist / Password is wrong"
        );
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    if (state.auth.isLoggedInWithGoogle) {
      googleLogout();
    } else {
      await axios.post("/auth/logout");
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;

    if (refreshToken === null) {
      return thunkAPI.rejectWithValue("Unable to refresh user");
    }

    try {
      const response = await axios.post(
        "/auth/refresh",
        { sid: state.auth.sid },
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGoogleUserProfile = createAsyncThunk(
  "auth/fetchGoogleUserProfile",
  async (accessToken) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
