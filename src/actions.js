import { INVENTORY_ACTIONS, USER_ACTIONS } from "./constants/actionTypes.js";
import { fetchProductsApi } from "./api.js";
import { getInventoryStats } from "./utils";

export const fetchProducts = async (dispatch) => {
  const products = await fetchProductsApi().then((res) => res.data);

  const inventoryStats = getInventoryStats(products);
  dispatch({
    type: INVENTORY_ACTIONS.FETCH_PRODUCT,
    payload: {
      products: products,
      inventoryStats,
    },
  });
};

export const toggleUser = async (dispatch, user) => {
  dispatch({
    type: USER_ACTIONS.TOGGLE_USER,
    payload: {
      user,
    },
  });
};

export const onProductUpdate = (dispatch, newProducts) => {
  const inventoryStats = getInventoryStats(newProducts);

  dispatch({
    type: INVENTORY_ACTIONS.UPDATE_PRODUCT,
    payload: {
      products: newProducts,
      inventoryStats,
    },
  });
};
