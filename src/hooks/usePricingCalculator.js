import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPricePer100g, getPrice, fixNumber, multiply } from "../utils/functions";

const usePricingCalculator = () => {
  const [prices, setPrices] = useState([]);
  const product = useSelector((state) => state.product.productData);
  const competitivePrice = useSelector((state) => state.product.selected.price);
  const { compared, factor, masa } = product[0];

  useEffect(() => {

    const competitivePricePer100g = getPricePer100g(competitivePrice, masa);
    const ourProductPricePer100g = multiply(competitivePricePer100g, factor);

    const productsPrices = compared.map((ourProduct) => {
      const ourProductPrice = fixNumber(
        getPrice(ourProductPricePer100g, ourProduct.masa)
      );

      return {
        id: ourProduct.id,
        price: ourProductPrice,
      };
    });

    setPrices(productsPrices);
  }, [competitivePrice, product, compared, factor, masa]);

  return [prices];
};

export default usePricingCalculator;
