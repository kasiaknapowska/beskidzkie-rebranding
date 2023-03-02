import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CustomTable from "../CustomTable/CustomTable";
import InfoBox from "../InfoBox/InfoBox";

const Results = () => {
  return (
    <Stack spacing={4} sx={{width: "100%"}}>
         <Divider role="presentation" textAlign="left">
          WYNIKI
        </Divider>
      <InfoBox title="wolumen" text="?"/>
      <CustomTable />
    </Stack>
  );
};

export default Results;
