import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import middlewares from "../middleware";

const configureStore = () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middlewares)
  );
};

export default configureStore;
