import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";

const PCProductDetails = () => {
  const { id, price } = useSelector((state) => state.product.selected);

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 4 }}>
      <Typography variant="small">Na podstawie:</Typography>
      <Typography variant="small">{id}</Typography>
      <Typography variant="small">{price} PLN</Typography>
    </Stack>
  );
};

export default PCProductDetails;
