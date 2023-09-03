import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.baseURL = "https://portfolio-phonebook-backend.vercel.app/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const regThunk = createAsyncThunk(
  "users/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "/users/register",
        data: credentials,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "/users/login",
        data: credentials,
      });

      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: "/users/logout",
      });
      token.unset();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/update",
  async (editData, thunkAPI) => {
    const { _id, ...data } = editData;
    try {
      const response = await axios({
        method: "patch",
        url: `/users/${_id}`,
        data: data,
      });

      return response.data;
    } catch (error) {}
  }
);

export const refreshThunk = createAsyncThunk(
  "users/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    token.set(state.auth.token);

    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
