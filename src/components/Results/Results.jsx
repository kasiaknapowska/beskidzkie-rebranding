import React from "react";
import { useSelector } from "react-redux";
import useWolumenCalculator from "../../hooks/useWolumenCalculator";
import { fixNumber } from "../../utils/functions";
import { Divider, Stack } from "@mui/material";
import CustomTable from "../CustomTable/CustomTable";
import InfoBox from "../InfoBox/InfoBox";
import ProductDetails from "../ProductDetails/ProductDetails";
import useQuantityCalculator from "../../hooks/useQuantityCalculator";

const Results = () => {
  const [wolumen] = useWolumenCalculator();
  const [quantity] = useQuantityCalculator();
  const wolumenFixed = fixNumber(wolumen);
  console.log("results");
console.log(quantity)
  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Divider role="presentation" textAlign="left">
        WYNIKI
      </Divider>
      <ProductDetails />
      <InfoBox title="wolumen" text={wolumenFixed} />
      <CustomTable header={["", "Było", "Jest"]} />
    </Stack>
  );
};

export default Results;
