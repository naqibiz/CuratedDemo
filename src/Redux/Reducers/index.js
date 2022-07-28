import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ThemeReducer from "./ThemeReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mode: persistReducer(persistConfig, ThemeReducer),
});

const appReducer = (state, action) => {
  if (action.type == "LOGOUT_USER_SUCCESS") {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export const store = createStore(appReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
