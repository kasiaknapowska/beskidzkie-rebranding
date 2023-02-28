import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

import { products } from "../../data/data";

const Form = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      product: "",
      karton: "standardowy",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(products.filter((product) => product.id === data.product));
  };

  //   const productSelected = watch("product");
  const productSelected = products.filter(
    (product) => product.id === watch("product")
  );
  const productPackage = productSelected[0]?.pack;
  // function validateSelect(v) {
  //     if (v) return "";
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Controller
          name="product"
          control={control}
          rules={{
            required: true,
            // validate: {
            //     check: v => v ? "" : "Wybierz coś"
            // }
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl fullWidth>
              <InputLabel id="produkt">Wybierz produkt</InputLabel>
              <Select
                //   {...field}
                labelId="produkt"
                id="produkt"
                label="Wybierz produkt"
                onChange={onChange}
                value={value}
              >
                {products.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.id}
                  </MenuItem>
                ))}
              </Select>{" "}
            </FormControl>
          )}
        />
        {productSelected && productPackage && (
          <>
            <Controller
              name="karton"
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl>
                  {/* <FormLabel id="karton">Wybierz karton</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="karton"
                    name="karton"
                    row
                    value={value}
                    onChange={onChange}
                  >
                    {productPackage.map((el) => (
                      <FormControlLabel
                        key={el}
                        value={el}
                        control={<Radio />}
                        label={"karton " + el}
                      />
                    ))}
                    {/* <FormControlLabel value={value} control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                  </RadioGroup>
                </FormControl>
              )}
            />
            <Button type="submit" variant="contained" size="large">
              Przelicz
            </Button>
          </>
        )}
      </Stack>
    </form>
  );
};

export default Form;
