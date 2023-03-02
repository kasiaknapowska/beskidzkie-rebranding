import React from "react";
import { useSelector } from "react-redux";
import useWolumenCalculator from "../../hooks/useWolumenCalculator";
import { fixNumber } from "../../utils/functions";
import { Divider, Stack, Typography } from "@mui/material";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import CustomTable from "../CustomTable/CustomTable";
import InfoBox from "../InfoBox/InfoBox";

const Results = () => {
  const [wolumen, productWeight] = useWolumenCalculator();
  const { id, type, pack, quantity } = useSelector(
    (state) => state.product.selected
  );
  const wolumenFixed = fixNumber(wolumen);

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Divider role="presentation" textAlign="left">
        WYNIKI
      </Divider>
      <Stack spacing={1}>
        <Typography variant="subtitle1">{id}</Typography>
        <Typography variant="subtitle2">
          {productWeight.before} g
          <TrendingFlatOutlinedIcon sx={{ margin: "0 16px" }} />{" "}
          {productWeight.after} g
        </Typography>
        <Stack direction="row" spacing={3}>
          <Typography>Typ: {type}</Typography>
          <Typography>Ilość: {quantity} </Typography>
          <Typography>Opakowanie: {pack} </Typography>
        </Stack>
      </Stack>
      <InfoBox title="wolumen" text={wolumenFixed} />
      <CustomTable header={["", "Było", "Jest"]} />
    </Stack>
  );
};

export default Results;
