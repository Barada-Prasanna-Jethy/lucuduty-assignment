import { useSelector } from "react-redux";

export default function InventoryStats() {
  const inventoryStats = useSelector((state) => state.inventory.inventoryStats);
  return (
    <>
      <div className="statsHeader">Inventory stats</div>
      <div className="statsContainer">
        <div className="statsTile">
          <div className="statsTitle">Total products</div>
          <div className="statsValue">{inventoryStats.totalProducts}</div>
        </div>
        <div className="statsTile">
          <div className="statsTitle">Total store value</div>
          <div className="statsValue">{inventoryStats.storeValue}</div>
        </div>
        <div className="statsTile">
          <div className="statsTitle">Out of stocks</div>
          <div className="statsValue">{inventoryStats.outOfStocks}</div>
        </div>
        <div className="statsTile">
          <div className="statsTitle">No. of categories</div>
          <div className="statsValue">{inventoryStats.noOfCategories}</div>
        </div>
      </div>
    </>
  );
}
