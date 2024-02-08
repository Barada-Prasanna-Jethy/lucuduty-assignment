import ProductActions from "./ProductActions";
import { dollarToInt } from "../utils";

export default function ProductDetails({
  productDetails,
  toggleEditModal,
  onEdit,
}) {
  return (
    <>
      <div className={`tableRow ${productDetails.disabled ? "disabled" : ""}`}>
        <div>{productDetails.name}</div>
        <div>{productDetails.category}</div>
        <div>{productDetails.price}</div>
        <div>{productDetails.quantity}</div>
        <div>{dollarToInt(productDetails.price) * productDetails.quantity}</div>
        <div>
          <ProductActions
            productDetails={productDetails}
            toggleEditModal={toggleEditModal}
            onEdit={onEdit}
          />
        </div>
      </div>
    </>
  );
}
