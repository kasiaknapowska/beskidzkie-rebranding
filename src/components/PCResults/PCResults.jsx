import React from "react";
import { useSelector } from "react-redux";
import { Divider, Stack, Typography } from "@mui/material";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

import PCProductDetails from "../PCProductDetails/PCProductDetails";
import CustomNumber from "../CustomNumber/CustomNumber";

const PCResults = () => {
  const product = useSelector((state) => state.product.productData);

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Divider role="presentation" textAlign="left">
        WYNIKI
      </Divider>
      <PCProductDetails />
      {product[0].compared.map((el, i) => (
        <>
          <Stack direction="row" spacing={2} key={el.id}>
            <CustomNumber number={i + 1} />
            <Typography variant="subtitle1">
              {el.id}
            </Typography>
            <TrendingFlatOutlinedIcon sx={{ margin: "0 16px" }} />{" "}
            <Typography variant="subtitle1">
              3.56 PLN
            </Typography>
          </Stack>
    
        </>
      ))}
    </Stack>
  );
};

export default PCResults;
