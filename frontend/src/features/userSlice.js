import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstname: "",
    lastname: "",
    username: "",
    token: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setProfile: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUsername, setProfile, setToken } = userSlice.actions;
export default userSlice.reducer;
