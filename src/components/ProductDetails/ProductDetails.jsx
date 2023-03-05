import React from "react";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import { getProductWeight } from "../../utils/functions";

const ProductDetails = () => {
  const { id, type, pack, quantity } = useSelector(
    (state) => state.product.selected
  );
  const product = useSelector((state) => state.product.productData);
  const productWeight = getProductWeight(...product);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1">{id}</Typography>
      <Typography variant="subtitle2">
        {productWeight.before} g
        <TrendingFlatOutlinedIcon sx={{ margin: "0 16px" }} />{" "}
        {productWeight.after} g
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 4 }}>
        <Typography variant="small">Typ: {type}</Typography>
        <Typography variant="small">Ilość: {quantity} </Typography>
        <Typography variant="small">Opakowanie: {pack} </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
