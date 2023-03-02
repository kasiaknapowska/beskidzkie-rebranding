import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getObjectValueByKey, calcWolumenWeight } from "../utils/functions";

const useWolumenCalculator = () => {
  const [wolumen, setWolumen] = useState(0);
  const product = useSelector((state) => state.product.productData);
  const productToCount = useSelector((state) => state.product.selected);
  const { type, pack, quantity } = productToCount;

  useEffect(() => {
    if (product.length === 1) {
      const { old } = product[0];

      const packQuantity = getObjectValueByKey(
        getObjectValueByKey(old, type)[0],
        pack
      );

      const packQ = packQuantity.length === 1 ? packQuantity[0] : 1;
      const weight = calcWolumenWeight(old.masa, Number(quantity), packQ);
      setWolumen(weight);
    }
  }, [productToCount]);

  return [wolumen];
};

export default useWolumenCalculator;
