import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const StateExample = () => {
  const [name, setName] = useState("AShish");
  return (
    <>
      <Typography variant="h2"> {name}</Typography>

      <Button
        variant="contained"
        color="success"
        onClick={() => setName("simran")}
      >
      Change Name</Button>
    </>
  );
};

export default StateExample;
