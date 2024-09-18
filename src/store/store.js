import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import videoReducer from "../reducers/videoReducer";

const rootReducer = combineReducers({
  video: videoReducer,
});

const store = createStore(rootReducer);

export { store };
