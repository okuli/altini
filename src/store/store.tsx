import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

export default function configureStore(preloadState = {}) {
  const middleware = [thunk];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middleware)
  );
  const enhancers = [middlewareEnhancer];

  const store = createStore(rootReducer, preloadState, compose(...enhancers));
  // @ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
}
