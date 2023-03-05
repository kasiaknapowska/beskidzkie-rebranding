import React from "react";
import { useController } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CustomSelect = ({ data, name, control, label }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <>
      <FormControl error={!!error}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          id={name}
          label={label}
          onChange={onChange}
          value={value}
        >
          {data.map((el) => (
            <MenuItem key={el.id} value={el.id}>
              {el.id}
            </MenuItem>
          ))}
        </Select>{" "}
      </FormControl>
    </>
  );
};

export default CustomSelect;
