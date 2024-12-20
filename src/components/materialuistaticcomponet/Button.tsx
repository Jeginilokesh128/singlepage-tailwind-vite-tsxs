import React from "react";
import Button from "@mui/material/Button";

interface Buttonstructure {
  variant: "contained" | "outlined" | "text";
  functiondata: () => void;
}

// Typing the props and the return type as JSX.Element
const Buttondata: React.FC<Buttonstructure> = ({ functiondata, variant }) => {
  return (
    <div>
      <Button onClick={functiondata} variant={variant}>
        Contained
      </Button>
    </div>
  );
};

export default Buttondata;

// based on the contion we will ebale the key and value
// based on the condtion we will eanable the value
