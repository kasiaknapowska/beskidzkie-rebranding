import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getObjectValueByKey } from "../utils/functions";
import useWolumenCalculator from "./useWolumenCalculator";

const useQuantityCalculator = () => {
  const [wolumen] = useWolumenCalculator();
  const [quantity, setQuantity] = useState({});
  const product = useSelector((state) => state.product.productData);
  const productToCount = useSelector((state) => state.product.selected);

  const { old: before, new: after } = product[0];
  const beforePacks = getObjectValueByKey(before, productToCount.type);
  const afterPacks = getObjectValueByKey(after, productToCount.type);

console.log(beforePacks)
console.log(afterPacks)

useEffect(() => {
    setQuantity({beforePacks, afterPacks})
}, [productToCount])

  return [quantity];
};

export default useQuantityCalculator;
