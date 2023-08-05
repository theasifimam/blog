import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/utils";

export const logoutAction = createAsyncThunk(
  "logout",
  async (token, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`,
        },
      });

      const processedData = await response.json();

      if (response.status === 200) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    user: {
      id: "",
      username: "",
      accessToken: "",
      email: "",
      roles: [],
    },
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  extraReducers: {
    // logout Request Handling
    [logoutAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [logoutAction.fulfilled]: (state, { payload }) => {
      state.user = {
        id: "",
        username: "",
        accessToken: "",
        email: "",
      };
      state.success = true;
      state.loading = false;
      removeUserSession();
      notify(payload.message);
    },
    [logoutAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
      console.log("Error : ", payload);
      notify(payload.message, "error");
    },
  },
});

export default logoutSlice.reducer;
