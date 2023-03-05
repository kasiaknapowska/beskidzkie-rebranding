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

export const calcWolumenWeight = (productWeight, quantity, packQuantity = 1) =>
  productWeight * quantity * packQuantity;

export const getProductWeight = (product) => {
  const before = product.old.masa * 1000;
  const after = product.new.masa * 1000;
  return { before, after };
};

export const fixNumber = (n) => n.toFixed(2);

export const roundNumber = (n) => Math.round(n * 100) / 100;

export const createTableData = (pack, before, after) => {
  return { pack, before, after };
};

export const calcQuantity = (
  wolumen,
  weightBefore,
  weightAfter,
  packsBefore = 1,
  packsAfter = 1
) => {
  const before = roundNumber(wolumen / weightBefore / packsBefore);
  const after = roundNumber(wolumen / weightAfter / packsAfter);

  return { before, after };
};
