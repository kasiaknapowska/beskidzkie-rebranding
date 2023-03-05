import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getObjectValueByKey, calcQuantity } from "../utils/functions";
import useWolumenCalculator from "./useWolumenCalculator";

const useQuantityCalculator = () => {
  const [quantity, setQuantity] = useState({});
  const [wolumen] = useWolumenCalculator();
  const product = useSelector((state) => state.product.productData);
  const productToCount = useSelector((state) => state.product.selected);

  useEffect(() => {
    if (product.length === 1) {
      const { old: before, new: after } = product[0];
      const packsBefore = getObjectValueByKey(before, productToCount.type)[0];
      const packsAfter = getObjectValueByKey(after, productToCount.type)[0];
      const piece = calcQuantity(wolumen, before.masa, after.masa);
      const carton = calcQuantity(
        wolumen,
        before.masa,
        after.masa,
        packsBefore.karton,
        packsAfter.karton
      );
      const pallet = calcQuantity(
        wolumen,
        before.masa,
        after.masa,
        packsBefore.paleta,
        packsAfter.paleta
      );

      setQuantity({ piece, carton, pallet });
    }
  }, [wolumen, product]);

  return [quantity];
};

export default useQuantityCalculator;
