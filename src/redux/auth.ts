import { Roles } from "@/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtPayload, RoleEnum } from "../types/generalTypes";


const INITIAL_STATE = {
  isLoggedIn: false,
  token: "",
  expiresIn: 0,
  refreshExpiresIn: 0,
  refreshToken: "",
  role: "",
  user: null,
 

};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      if(action.payload.role === Roles.Customer){
        state.user = action.payload.customer;
      }
      else  state.user = action.payload.user;
      
      state.role = action.payload.role;
      
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      state.expiresIn = 0;
      state.refreshExpiresIn = 0;
      state.refreshToken = "";
      state.role = "";
      state.user = null;
    },
    updateAccessToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setLogin, setLogout, updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
