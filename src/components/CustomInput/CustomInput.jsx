import React from "react";
import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

const CustomInput = ({ control, name, pattern, label, ...props }) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true, pattern },
  });
  return (
    <TextField
      label={label}
      id={name}
      onChange={onChange}
      value={value}
      helperText={error ? error.message : null}
      error={!!error}
      inputRef={ref}
      {...props}
      //   InputProps={{
      //     endAdornment: <InputAdornment position="end">sztuk</InputAdornment>,
      //   }}
    />
  );
};

export default CustomInput;
