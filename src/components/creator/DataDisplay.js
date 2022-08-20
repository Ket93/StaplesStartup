import React from "react";
import { CreatorNav } from "./CreatorNav";
import { Typography, Stack } from "@mui/material";

export const DataDisplay = () => {
  return (
    <>
      <CreatorNav />
      <Stack direction="column" spacing={5} mx={2} my={5} textAlign="center">
        <Typography variant="h2">Project Analytics</Typography>
      </Stack>
    </>
  );
};
