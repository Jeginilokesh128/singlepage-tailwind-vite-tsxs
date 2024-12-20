import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Inpudatacomponet() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        autoComplete="on"
        color="secondary"
        onChange={(e) => {
          details(e);
        }}
        name="firstname"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          details(e);
        }}
        name="password"
      />
    </div>
  );
}
