import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Container,
  Stack,
} from "@mui/material";

import { products } from "../../data/data";

const Form = () => {
  return (
    <form>
      {/* <Box sx={{ width: 400 }}> */}
        <FormControl fullWidth>       
          <InputLabel id="produkt">Produkt</InputLabel>
          <Select
            labelId="produkt"
            id="produkt"
            label="Produkt"
            // value={age}

            // onChange={handleChange}
          >
            {products.map((product) => (
              <MenuItem value={product.id}>{product.id}</MenuItem>
            ))}
          </Select>{" "}
        </FormControl>
      {/* </Box> */}
    </form>
  );
};

export default Form;
