import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setSelected } from "../../redux/productSlice";

import { Button, Stack, Divider } from "@mui/material";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";

import { filterById, filterByType } from "../../utils/functions";
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
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setSelected(data));
  };

  const productsFilteredById = filterById(products, watch("id"));
  const productType = productsFilteredById[0]?.type || defaultType;
  const productsFilteredByType = filterByType(products, watch("type"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
        <Divider role="presentation" textAlign="left">
          DOWNSIZING KALKULATOR
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
        <Divider role="presentation" textAlign="left">
          SPRZEDANY WOLUMEN
        </Divider>
        <Stack spacing={2}>
          <CustomInput
            name="quantity"
            control={control}
            label="Podaj ilość"
            type="number"
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
        <Button variant="outlined" onClick={() => reset()}>
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
