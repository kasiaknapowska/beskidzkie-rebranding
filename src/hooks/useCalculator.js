import { useState, useEffect } from "react";
import { products } from "../data/data";
import { selectProduct } from "../utils/functions";

const useCalculator = (productToCount) => {
  const [product, setProduct] = useState(null);
  const [weight, setWeight] = useState("");

  useEffect(() => {
    setProduct(selectProduct(products, productToCount.id));
  }, [productToCount]);

  const singleProductWeight = product.old.masa;
  const quantity = Number(productToCount.quantity);

  const filtered = getObjectValueByKey(product[0].old, productToCount.type);
  console.log(filtered[0]);
  const quantityInPack = getObjectValueByKey(filtered[0], productToCount.pack);
  console.log(quantityInPack);

  let wolumen;

  if (quantityInPack.length === 1) {
    wolumen = singleProductWeight * quantity * quantityInPack[0];
  } else {
    wolumen = singleProductWeight * quantity;
  }

  setWeight(wolumen);

  return [weight]
};
