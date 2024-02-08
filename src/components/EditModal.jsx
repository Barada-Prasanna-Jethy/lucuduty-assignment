import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { onProductUpdate } from "../actions";

export default function EditModal({
  productDetails,
  showEditModal,
  toggleEditModal,
}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.products);
  const [updatedDetails, setUpdatedDetails] = useState({});

  useEffect(() => {
    setUpdatedDetails(productDetails);
  }, [productDetails]);

  const onSave = () => {
    const newProducts = products.map((product) => {
      if (product.name === updatedDetails.name) return updatedDetails;
      else return product;
    });
    onProductUpdate(dispatch, newProducts);
    toggleEditModal();
  };

  const onInputChange = (e, inputKey) => {
    setUpdatedDetails((prevDetails) => {
      return { ...prevDetails, [inputKey]: [e.target.value] };
    });
  };

  return (
    <Modal
      isOpen={showEditModal}
      className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <div className="modalHeader">
        <div className="modalTitle">Edit product</div>
        <div className="closeButton" onClick={() => toggleEditModal()}>
          X
        </div>
      </div>
      <div>{updatedDetails.name}</div>
      <div className="editForm">
        <div className="formField">
          <div>Category</div>
          <input
            className="formInput"
            onChange={(e) => onInputChange(e, "category")}
            value={updatedDetails.category}
          />
        </div>
        <div className="formField">
          <div>price</div>
          <input
            className="formInput"
            onChange={(e) => onInputChange(e, "price")}
            value={updatedDetails.price}
          />
        </div>
        <div className="formField">
          <div>Quantiy</div>
          <input
            className="formInput"
            onChange={(e) => onInputChange(e, "quantity")}
            value={updatedDetails.quantity}
          />
        </div>
        <div className="formField">
          <div>Value</div>
          <input
            className="formInput"
            onChange={(e) => onInputChange(e, "value")}
            value={updatedDetails.value}
          />
        </div>
      </div>
      <div className="modalFooter">
        <div className="closeButton" onClick={() => toggleEditModal()}>
          Cancel
        </div>
        <div className="saveButton" onClick={onSave}>
          Save
        </div>
      </div>
    </Modal>
  );
}
