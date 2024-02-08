import { useEffect, useState } from "react";
import { fetchProducts } from "../actions.js";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./ProductDetails.jsx";
import EditModal from "./EditModal";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.products);
  const [currentProduct, setCurrentProduct] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const onEdit = (productDetails) => {
    setCurrentProduct(productDetails);
  };
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <div className="tableContainer">
      <div className="tableRow">
        <div className="columnHeader">Name</div>
        <div className="columnHeader">Category</div>
        <div className="columnHeader">Price</div>
        <div className="columnHeader">Quantity</div>
        <div className="columnHeader">Value</div>
        <div className="columnHeader">Actions</div>
      </div>
      {products.length
        ? products.map((product, idx) => (
            <ProductDetails
              key={idx}
              productDetails={product}
              toggleEditModal={toggleEditModal}
              onEdit={onEdit}
            />
          ))
        : null}
      <EditModal
        productDetails={currentProduct}
        showEditModal={showEditModal}
        toggleEditModal={toggleEditModal}
      />
    </div>
  );
}
