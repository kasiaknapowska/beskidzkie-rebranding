import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getObjectValueByKey, calcWolumenWeight } from "../utils/functions";

const usePricingCalculator = () => {
  const [price, setPrice] = useState([]);
  const product = useSelector((state) => state.product.productData);
  const competitivePrice = useSelector((state) => state.product.selected.price);
 

  useEffect(() => {
    console.log(product)
    console.log(competitivePrice)
      setPrice(1);
    
  }, [productToCompare]);

  return [price];
};

export default usePricingCalculator;
