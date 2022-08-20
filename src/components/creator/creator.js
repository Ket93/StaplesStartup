import * as React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { CreatorNav } from "./CreatorNav";
import { CreatorInput } from "./CreatorInput";

export const Creator = () => {
  return (
    <>
      <CreatorNav navItems={[{"text": "Data", "link":"/dataDisplay"}]}/>
      <Stack direction="column" spacing={5} mx={2} my={5} textAlign="center">
        <Typography variant="h2">Describe your project</Typography>
        <CreatorInput />
      </Stack>
    </>
  );
};
