import { Roles } from "@/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtPayload, RoleEnum } from "../types/generalTypes";

export type TUser={
  id: number,
  first_name: null | string,
  last_name: null | string,
  username: string,
  mobile: string,
  email: string,
  avatar: any,
  password: string,
  verification_token: null | string,
  is_email_verified: string | Date,
  is_active: boolean,
  is_deleted: boolean,
  created_at: string | Date,
  updated_at: string | Date,
  deleted_at: any,
  type: string,
  fcm_token: string
}
type initialState = {
  isLoggedIn: boolean;
  token: string;
  expiresIn: number;
  refreshExpiresIn: number;
  refreshToken: string;
  role: string;
  user: TUser | null;
}
const INITIAL_STATE: initialState = {
  isLoggedIn: false,
  token: "",
  expiresIn: 0,
  refreshExpiresIn: 0,
  refreshToken: "",
  role: "",
  user: null,
 

} ;

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
