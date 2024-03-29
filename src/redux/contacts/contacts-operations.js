import { createAsyncThunk } from '@reduxjs/toolkit';


import * as api from '../../shared/services/app';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.fetchContacts();

      return data;
    } catch ({ response }) {
      alert(` Sorry,${response.data}`);
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      alert(` Sorry,${response.data}`);
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedTitle = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedTitle;
      });
      if (result) {
        alert(`${name} is already in contacts`, {
          autoClose: 3000,
        });
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      console.log(id);
      return id;
    } catch ({ response }) {
      alert(` Sorry,${response.data}`);
      return rejectWithValue(response.data);
    }
  }
);
