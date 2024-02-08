import { INVENTORY_ACTIONS } from "../constants/actionTypes";

const initialState = {
  products: [],
  inventoryStats: {},
};
export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case INVENTORY_ACTIONS.FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
        inventoryStats: action.payload.inventoryStats,
      };
    case INVENTORY_ACTIONS.UPDATE_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
        inventoryStats: action.payload.inventoryStats,
      };
    default:
      return state;
  }
}
