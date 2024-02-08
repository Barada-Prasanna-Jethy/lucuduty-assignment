import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";
import userReducer from "./userReducer";
const allReducers = combineReducers({
  inventory: inventoryReducer,
  user: userReducer,
});

export default allReducers;
