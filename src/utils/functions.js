export const filterById = (products, id) =>
  products.filter((product) => product.id === id);

export const filterByType = (products, type) =>
  products.filter((product) => product.type.includes(type));

export const getObjectValueByKey = (myObject, myKey) =>
  Object.values(
    Object.fromEntries(
      Object.entries(myObject).filter(([key, value]) => key === myKey)
    )
  );
// const selectType = (product, defaultType) => product[0]?.type || defaultType

export const calcWolumenWeight = (productWeight, quantity, packQuantity = 1) =>
  productWeight * quantity * packQuantity;

export const getProductWeight = (product) => {
  const before = product.old.masa * 1000;
  const after = product.new.masa * 1000;
  return { before, after };
};

export const fixNumber = (n) => n.toFixed(2);

export const createTableData = (pack, before, after) => {
  return { pack, before, after };
};
