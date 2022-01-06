import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./todoReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tasks"],
};

const rootReducer = combineReducers({
  tasks: todoReducer,
});

export default persistReducer(persistConfig, rootReducer);
