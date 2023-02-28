import React from "react";
import { useController } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography
} from "@mui/material";

const CustomRadioGroup = ({ control, name, data }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby={name}
        name={name}
        row
        value={value}
        onChange={onChange}
      >
        {data.map((el) => (
          <FormControlLabel
            key={el}
            value={el}
            control={<Radio />}
            label={el}
          />
        ))}
      </RadioGroup>
      {!!error ? (
        <Typography
          className="error"
          sx={{ fontSize: "12px", marginLeft: "14px" }}
        >
          Wybierz jedną z powyższych opcji
        </Typography>
      ) : null}
    </FormControl>
  );
};

export default CustomRadioGroup;
