import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import usePricingCalculator from "../../hooks/usePricingCalculator";
import PCProductDetails from "../PCProductDetails/PCProductDetails";
import CustomNumber from "../CustomNumber/CustomNumber";


const PCResults = () => {
  const [prices] = usePricingCalculator();

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Divider role="presentation" textAlign="left">
        BESKIDZKIE ODPOWIEDNIKI
      </Divider>
      <PCProductDetails />
      {prices.map((el, i) => (

        <Stack
          direction="row"
          key={el.id}
          alignItems="center"
          sx={{ flexWrap: "wrap", gap: "16px" }}
        >
          <CustomNumber number={i + 1} />
          <Typography variant="subtitle1">{el.id}</Typography>
          <TrendingFlatOutlinedIcon />{" "}
          <Typography variant="subtitle1">{el.price} PLN</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default PCResults;
