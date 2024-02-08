import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onProductUpdate } from "../actions";

export default function ProductActions({
  productDetails,
  toggleEditModal,
  onEdit,
}) {
  const products = useSelector((state) => state.inventory.products);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const onDisable = () => {
    const newProducts = products.map((product) => {
      if (product.name === productDetails.name)
        return { ...productDetails, disabled: !productDetails.disabled };
      else return product;
    });
    onProductUpdate(dispatch, newProducts);
  };

  const onDelete = () => {
    const newProducts = products.filter(
      (product) => product.name !== productDetails.name
    );
    onProductUpdate(dispatch, newProducts);
  };
  return (
    <div>
      <button
        disabled={productDetails.disabled || user === "user"}
        onClick={() => {
          onEdit(productDetails);
          toggleEditModal();
        }}
      >
        edit
      </button>
      <button disabled={user === "user"} onClick={onDisable}>
        {productDetails.disabled ? "enable" : "disable"}
      </button>
      <button disabled={user === "user"} onClick={onDelete}>
        delete
      </button>
    </div>
  );
}
