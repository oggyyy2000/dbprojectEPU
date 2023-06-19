import { CircularProgress } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
