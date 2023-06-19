import React from "react";
import { Button } from "@mui/material";

const HomeHeader = () => {
  return (
    <div className="flex justify-evenly mt-4 relative">
      <Button variant="contained">Import File</Button>
      <Button variant="contained">Join Table</Button>
    </div>
  );
};

export default HomeHeader;
