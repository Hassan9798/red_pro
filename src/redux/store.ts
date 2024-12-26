import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "../redux/auth"
import homeSlice from "./home";
import accessTokenSlice from "./auth";
// import dealSlice from "./dealSlice";
// import toastSlice from "./toastSlice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: authSlice,
  home: homeSlice,
  accessToken: accessTokenSlice,
//   deal: dealSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    centeralizedStateData: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const getReduxState = () => {
  return store.getState();
};
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
