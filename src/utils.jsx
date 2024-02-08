export const dollarToInt = (dollar) => parseInt(dollar.slice(1));

export const getInventoryStats = (products) => {
  let storeValue = 0;
  let outOfStocks = 0;
  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
    if (product.quantity === 0) outOfStocks = outOfStocks + 1;
    storeValue = storeValue + dollarToInt(product.price) * product.quantity;
  });
  return {
    totalProducts: products.length,
    storeValue,
    outOfStocks,
    noOfCategories: categories.length,
  };
};
