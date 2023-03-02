import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { products } from "../data/data";
import {
  selectProduct,
  getObjectValueByKey,
  getWolumenWeight,
} from "../utils/functions";

const useWolumenCalculator = () => {
  const [wolumen, setWolumen] = useState(0);

  const productToCount = useSelector((state) => state.productToCount.item);
  const product = selectProduct(products, productToCount.id);

  useEffect(() => {
    if (product.length === 1) {
      const { old } = product[0];
      const productWeight = old.masa;
      const quantity = Number(productToCount.quantity);
      const type = productToCount.type;
      const pack = productToCount.pack;
      const typeFiltered = getObjectValueByKey(old, type);
      const packQuantity = getObjectValueByKey(typeFiltered[0], pack);

      console.log(typeFiltered[0]);
      console.log(product);
      console.log(productToCount);
      console.log(packQuantity);

      const packQ = packQuantity.length === 1 ? packQuantity[0] : 1;
      const weight = getWolumenWeight(productWeight, quantity, packQ);
      setWolumen(weight);
    }
  }, [productToCount]);

  // console.log(wolumen);

  return [wolumen];
};

export default useWolumenCalculator;
