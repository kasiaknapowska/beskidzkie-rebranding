import React from "react";
import { useForm } from "react-hook-form";
import { Button, Stack, Typography, Divider } from "@mui/material";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";

import { products, typeSold } from "../../data/data";

const Form = () => {
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      product: "",
      pack: "standardowy",
      typeSold: "",
      quantitySold: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(...products.filter((product) => product.id === data.product));
    // reset()
  };

  const productSelected = products.filter(
    (product) => product.id === watch("product")
  );
  const productPackage = productSelected[0]?.pack;
  const packChosen = watch("pack")
  const productsFilteredByPackage = products.filter(
    (product) => product.pack.includes(packChosen) 
  );
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Typography variant="subtitle1">Rebranding Kalkulator</Typography>
        <CustomSelect
          data={productsFilteredByPackage}
          control={control}
          name="product"
          label="Wybierz produkt"
        />
        {productSelected && productPackage && (
          <>
            <CustomRadioGroup
              name="pack"
              control={control}
              data={productPackage}
            />
            <Divider />
            <Typography variant="subtitle1">Sprzedany wolumen</Typography>
            <CustomInput
              name="quantitySold"
              control={control}
              label="Podaj ilość"
              pattern={{
                value: /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                message:
                  "Podaj prawidłową liczbę całkowitą lub ułamek dziesiętny w formacie z ' . ', np. 0.5",
              }}
            />
            <CustomRadioGroup
              name="typeSold"
              control={control}
              data={typeSold}
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
