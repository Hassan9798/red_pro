import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import authSlice from "../redux/auth"
import homeSlice from "./home";
import accessTokenSlice from "./auth";
import cartSlice from "./cart";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import dealSlice from "./dealSlice";
// import toastSlice from "./toastSlice";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: authSlice,
  home: homeSlice,
  cart: cartSlice,
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
