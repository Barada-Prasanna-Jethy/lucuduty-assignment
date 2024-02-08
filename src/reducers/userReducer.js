import { USER_ACTIONS } from "../constants/actionTypes";

const initialState = {
  currentUser: "admin",
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.TOGGLE_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    default:
      return state;
  }
}
