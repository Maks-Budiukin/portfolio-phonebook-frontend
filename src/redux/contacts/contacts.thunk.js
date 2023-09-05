import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      const contacts = response.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setSelectedContactsThunk = createAsyncThunk(
  "contacts/setSelected",
  async (data, thunkAPI) => {
    return data;
  }
);

export const addContactsThunk = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: `/contacts`,
        data,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContactsThunk = createAsyncThunk(
  "contacts/editContact",
  async (editData, thunkAPI) => {
    const { _id, ...data } = editData;
    try {
      console.log("DATA", data);
      const response = await axios({
        method: "patch",
        url: `/contacts/${editData._id}`,
        data: data,
      });

      const editedId = response.data._id;
      const { contacts } = thunkAPI.getState();

      const updatedContact = response.data;
      const items = contacts.items.map((contact) =>
        contact._id === editedId ? updatedContact : contact
      );

      return { items, updatedContact };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      const deletedId = response.data._id;
      const { contacts } = thunkAPI.getState();
      const items = contacts.items.filter(
        (contact) => contact._id !== deletedId
      );
      return items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSharedContactThunk = createAsyncThunk(
  "contacts/addSharedContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `/users/share/${data.shareLink}/${data.id}`,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
