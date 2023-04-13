import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Button, Stack, Divider } from "@mui/material";

import {competitiveProducts} from "../../data/data"
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";


const PricingCalculator = () => {
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      id: "",
      price: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
  };
// const productsToCompare = competitiveProducts.map(product => product.id)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
        <Divider role="presentation" textAlign="left">
          PRICING KALKULATOR
        </Divider>
        <Stack spacing={2}>
          <CustomSelect
            data={competitiveProducts}
            control={control}
            name="id"
            label="Wybierz produkt konkurencji"
          />{" "}
          <CustomInput
            name="price"
            control={control}
            label="Podaj cenę"
            type="number"
            pattern={{
              value: /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/,
              message:
                "Podaj prawidłową liczbę całkowitą lub ułamek dziesiętny w formacie z ' . ', np. 0.5",
            }}
          />
        </Stack>

        <Button type="submit" variant="contained" size="large">
          Przelicz
        </Button>
        <Button variant="outlined" onClick={() => reset()}>
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default PricingCalculator;
