import { createSlice } from '@reduxjs/toolkit';

const authApi = createSlice({
  name: 'auth',
  initialState: { token: null, user: {} },

  reducers: {
    setCreateUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: {
      reducer: (state) => {
        state.token = null;
        state.user = {};
      },
    },
  },
});

export const { setCreateUser, logout } = authApi.actions;
export default authApi.reducer;