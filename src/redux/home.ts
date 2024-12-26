import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtPayload, RoleEnum } from "../types/generalTypes";


const INITIAL_STATE:{categories:Array<any>} = {
 categories:[],

};

const homeSlice = createSlice({
  name: "home",
  initialState: INITIAL_STATE,
  reducers: {
    saveCategories: (state, action: PayloadAction<any>) => {
      state.categories = action.payload;
    },

  },
});

export const { saveCategories } = homeSlice.actions;
export default homeSlice.reducer;
