import React from "react";
import useWolumenCalculator from "../../hooks/useWolumenCalculator";
import { fixNumber } from "../../utils/functions";
import { Divider, Stack } from "@mui/material";
import CustomWolumenTable from "../CustomWolumenTable/CustomWolumenTable";
import InfoBox from "../InfoBox/InfoBox";
import ProductDetails from "../ProductDetails/ProductDetails";
import useQuantityCalculator from "../../hooks/useQuantityCalculator";

const Results = () => {
  const [wolumen] = useWolumenCalculator();
  const [quantity] = useQuantityCalculator();
  const wolumenFixed = fixNumber(wolumen);

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Divider role="presentation" textAlign="left">
        WYNIKI
      </Divider>
      <ProductDetails />
      <InfoBox title="wolumen" text={wolumenFixed} />
      {Object.keys(quantity).length > 0 && (
        <CustomWolumenTable header={["", "Było", "Jest"]} content={quantity} />
      )}
    </Stack>
  );
};

export default Results;
