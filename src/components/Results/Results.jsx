import React from "react";

import useWolumenCalculator from "../../hooks/useWolumenCalculator";

import { Divider, Stack, Typography } from "@mui/material";
import CustomTable from "../CustomTable/CustomTable";
import InfoBox from "../InfoBox/InfoBox";

const Results = () => {
// const product = useSelector(state => state.productToCount.item)
const [wolumen] = useWolumenCalculator()

// console.log(product)
// console.log(wolumen)

  return (
    <Stack spacing={4} sx={{width: "100%"}}>
        <Divider role="presentation" textAlign="left">
        WYNIKI
        </Divider>
      <InfoBox title="wolumen" text={wolumen}/>
      <CustomTable />
    </Stack>
  );
};

export default Results;
