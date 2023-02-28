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
  Typography,
  TextField,
  FormLabel,
  InputAdornment,
} from "@mui/material";

import { products } from "../../data/data";

const soldType = ["sztuki", "kartony", "palety"];

const Form = () => {
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      product: "",
      pack: "standardowy",
      soldType: "",
      soldQuantity: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(...products.filter((product) => product.id === data.product));
    // reset()
  };

  //   const productSelected = watch("product");
  const productSelected = products.filter(
    (product) => product.id === watch("product")
  );
  const productPackage = productSelected[0]?.pack;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Controller
          name="product"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl fullWidth>
              <InputLabel id="product">Wybierz produkt</InputLabel>
              <Select
                //   {...field}
                labelId="product"
                id="product"
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
              name="pack"
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
                    aria-labelledby="pack"
                    name="pack"
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
                    
                  </RadioGroup>
                 
                </FormControl>
              )}
            />
            <Typography>Sprzedany wolumen</Typography>
            <Controller
              name="soldQuantity"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                  message:
                    "Podaj prawidłową liczbę całkowitą lub ułamek dziesiętny w formacie z ' . ', np. 0.5",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Podaj ilość"
                  id="quantity"
                  onChange={onChange}
                  value={value}
                  helperText={error ? error.message : null}
                  error={!!error}
                  //   InputProps={{
                  //     endAdornment: <InputAdornment position="end">sztuk</InputAdornment>,
                  //   }}
                />
              )}
            />
            <Controller
              name="soldType"
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl>
                  {/* <FormLabel id="soldType">Wybierz rodzaj opakowania</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="soldType"
                    name="soldType"
                    row
                    value={value}
                    onChange={onChange}
                  >
                    {soldType.map((el) => (
                      <FormControlLabel
                        key={el}
                        value={el}
                        control={<Radio />}
                        label={el}
                      />
                    ))}
                  </RadioGroup>
                  {!!error ? <Typography className="error" sx={{fontSize: "12px", marginLeft: "14px"}}>Wybierz jedną z powyższych opcji</Typography> : null}
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
