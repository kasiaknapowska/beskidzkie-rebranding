import React from "react";
import { useForm } from "react-hook-form";
import { Button, Stack, Typography, Divider } from "@mui/material";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";

import { products, defaultType, pack } from "../../data/data";

const Form = () => {
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      id: "",
      type: "standardowy",
      pack: "",
      quantity: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(...products.filter((product) => product.id === data.id));
    // reset()
  };

  const productSelected = products.filter(
    (product) => product.id === watch("id")
  );
  const productType = productSelected[0]?.type || defaultType;
  const typeChosen = watch("type");
  const productsFilteredByType = products.filter((product) =>
    product.type.includes(typeChosen)
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
            data={productsFilteredByType}
            control={control}
            name="id"
            label="Wybierz produkt"
          />
          <CustomRadioGroup name="type" control={control} data={productType} />
        </Stack>
        {productSelected.length > 0 && (
          <>
            <Divider role="presentation" textAlign="left">
              SPRZEDANY WOLUMEN
            </Divider>
            <Stack spacing={2}>
              <CustomInput
                name="quantity"
                control={control}
                label="Podaj ilość"
                pattern={{
                  value: /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/,
                  message:
                    "Podaj prawidłową liczbę całkowitą lub ułamek dziesiętny w formacie z ' . ', np. 0.5",
                }}
              />
              <CustomRadioGroup name="pack" control={control} data={pack} />
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
