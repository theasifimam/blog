import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, setUserSession } from "../../../utils/utils";

export const loginAction = createAsyncThunk(
  "login",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const processedData = await response.json();

      if (response.status === (200 || 201)) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  extraReducers: {
    // login Request Handling
    [loginAction.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    [loginAction.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.loading = false;
      payload.token && setUserSession(payload.token, payload.user);
      state.success = true;
      state.error = false;
      notify(payload.message);
      console.log(payload);
    },
    [loginAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.message = payload.message;
      state.success = false;
      notify(payload.message, "error");
      console.log("Error : ", payload);
    },
  },
});

export default loginSlice.reducer;
