import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

const middleware = [promiseMiddleware(), thunk];

const composeStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const configureStore = (initialState) =>
  composeStoreWithMiddleware(
    rootReducer,
    initialState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore();

export { rootReducer };
