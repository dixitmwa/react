import { createAsyncThunk } from "@reduxjs/toolkit";
import Admin from "../../../services/apis/admin/admin";

// for login action
export const fetchAllUserThunk = createAsyncThunk(
  "admin/fetchAllUser",
  async (data: Pagination, thunkApi) => {
    try {
      const response = await Admin.fetchAllUserService(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
