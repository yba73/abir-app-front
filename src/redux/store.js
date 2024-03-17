import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
const authConfig = {
  key: "user",
  storage,
  whitelist: ["isAuth", "token", "userId", "isLogin"],
};
const persistedUserReducer = persistReducer(authConfig, userReducer);
const rootReducer = combineReducers({ user: persistedUserReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // to save the store in the local storage
