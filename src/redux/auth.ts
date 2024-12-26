import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtPayload, RoleEnum } from "../types/generalTypes";


const INITIAL_STATE = {
  isLoggedIn: false,
  accessToken: "",
  expiresIn: 0,
  refreshExpiresIn: 0,
  refreshToken: "",
  role: "",
  user: null,
  subRole: "",
  permissions: {}

};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.expiresIn = action.payload.expiresIn;
      state.refreshExpiresIn = action.payload.refreshExpiresIn;
      state.refreshToken = action.payload.refreshToken;
      state.role = action.payload.role;
      state.user = action.payload.user;
      state.subRole = action.payload.subRole;
      state.permissions = action.payload.permissions;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = "";
      state.expiresIn = 0;
      state.refreshExpiresIn = 0;
      state.refreshToken = "";
      state.role = "";
      state.user = null;
      state.permissions = {};
    },
    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});

export const { setLogin, setLogout, updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
