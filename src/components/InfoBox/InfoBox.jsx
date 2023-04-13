import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const InfoBox = ({title, text}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "14px",
        fontSize: '14px',
        color: "white",
        borderRadius: "4px",
        backgroundColor: "secondary.dark",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{textTransform: "uppercase"}}>{title} </Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default InfoBox;
