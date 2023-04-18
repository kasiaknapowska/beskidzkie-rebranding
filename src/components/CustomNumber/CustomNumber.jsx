import React from "react";
import { Box, Typography } from "@mui/material";

const CustomNumber = ({number}) => {
  return (
    <Box
          sx={{
            backgroundColor: "secondary.dark",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
          }}
        >
          <Typography>{number}</Typography>
        </Box>
  );
};

export default CustomNumber;
