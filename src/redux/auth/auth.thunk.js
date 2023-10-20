import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.warning(`${error.message}`);
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
      toast.warning(`${error.message}`);
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
      toast.warning(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/update",
  async (editData, thunkAPI) => {
    const { _id, avatarFile, ...data } = editData;
    try {
      let response = await axios({
        method: "patch",
        url: `/users/${_id}`,
        data: data,
      });

      if (avatarFile) {
        const formData = new FormData();
        formData.append("files", avatarFile);
        response = await axios.patch(`/users/${_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      return response.data;
    } catch (error) {
      toast.warning(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
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
      toast.warning(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
