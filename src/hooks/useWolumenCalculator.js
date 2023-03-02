import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { products } from "../data/data";
import {
  selectProduct,
  getObjectValueByKey,
  calcWolumenWeight,
} from "../utils/functions";

const useWolumenCalculator = () => {
  const [wolumen, setWolumen] = useState(0);
  const [productWeight, setProductWeight] = useState({ before: 0, after: 0 });

  const productToCount = useSelector((state) => state.product.selected);
  const { id, type, pack, quantity } = productToCount;
  // const product = selectProduct(products, id);
  const product = useSelector((state) => state.product.productData)

  useEffect(() => {
    if (product.length === 1) {
      const { old: before, new: after } = product[0];

      const oldProductWeight = before.masa * 1000;
      const newProductWeight = after.masa * 1000;

      const packQuantity = getObjectValueByKey(
        getObjectValueByKey(before, type)[0],
        pack
      );
      // console.log(productToCount);
      // console.log(product[0]);
      // console.log(packQuantity);

      const packQ = packQuantity.length === 1 ? packQuantity[0] : 1;
      const weight = calcWolumenWeight(before.masa, Number(quantity), packQ);
      setWolumen(weight);
      setProductWeight({ before: oldProductWeight, after: newProductWeight });
    }
  }, [productToCount]);

  return [wolumen, productWeight];
};

export default useWolumenCalculator;
