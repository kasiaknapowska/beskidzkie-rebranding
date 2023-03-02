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

  const defaultPack = ["standardowy", "sieciowy"];
  const onSubmit = (data) => {
    console.log(data);
    console.log(...products.filter((product) => product.id === data.product));
    // reset()
  };

  const productSelected = products.filter(
    (product) => product.id === watch("product")
  );
  const productPackage = productSelected[0]?.pack || defaultPack;
  const packChosen = watch("pack");
  const productsFilteredByPackage = products.filter((product) =>
    product.pack.includes(packChosen)
  );
  console.log(productSelected);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
        <Divider role="presentation" textAlign="left">
          REBRANDING KALKULATOR
        </Divider>
        <Stack spacing={2}>
        <CustomSelect
          data={productsFilteredByPackage}
          control={control}
          name="product"
          label="Wybierz produkt"
        />
        <CustomRadioGroup name="pack" control={control} data={productPackage} />
        </Stack>
        {productSelected.length > 0 && (
          <>
            <Divider role="presentation" textAlign="left">
              SPRZEDANY WOLUMEN
            </Divider>
            <Stack spacing={2}>
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
            </Stack>
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
