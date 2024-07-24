import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      return users;
    } catch (err) {
      return rejectWithValue("Unable to find users");
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "Unable to find all users";
    });
  },
});

export const usersReducer = userSlice.reducer;

// Promises -> Pending, Resolved / Success / fulfilled, Rejected / failure
