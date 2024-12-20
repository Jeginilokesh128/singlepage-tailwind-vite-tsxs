import * as React from "react";
import Box from "@mui/material/Box";
// import Inputcomponent from "./Inputcomponent"
import Staticcomponet from "./materialuistaticcomponet/staticcomponet"
import CustomComponent from "./materialuistaticcomponet/customcomponet"
import Buttondata from "./materialuistaticcomponet/Button"
import Inputcomponent from "../components/Inputcomponent"

const accordionData = [
  {
    title: "Accordion 1",
    details: "Details for Accordion 1",
  },
  {
    title: "Accordion 2",
    details: "Details for Accordion 2",
  },
  {
    title: "Accordion 3",
    details: "Details for Accordion 3",
  },
];

export default function BoxBasic() {
  return (
    // <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
    //   This Box renders as an HTML section element.
    // </Box>
    <>
      <Inputcomponent />
      {/* <Inputcomponent /> */}
      <Buttondata
        functiondata={() => {
          alert("i am from the parent");
        }}
      />
      {/* <Staticcomponet /> now no error if i pass any ither value whil calling compont it will theou error for the prop
      <Staticcomponet />
      <Staticcomponet /> */}{" "}
      now no error i will send n number of key will my only keys hwne i hover on
      thh compont name it is shoing thr definition
      <CustomComponent
        name="murali"
        data={accordionData}
        jegini="lokesh"
      />{" "}
      //if i use any key is showing error when we do the destrructur for the
      props
    </>
  );
}

// import React from "react";
// import {
//   Radio,
//   RadioGroup,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
// } from "@mui/material";

// function MyRadioButtons() {
//   const [value, setValue] = React.useState("");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     // <FormControl>
//     //   <FormLabel>Gender</FormLabel>
//     //   <RadioGroup
//     //     value={value}
//     //     onChange={handleChange}
//     //     row // Aligns the radio buttons horizontally; remove for vertical alignment
//     //   >
//     //     <FormControlLabel value="male" control={<Radio />} label="Malell" />
//     //     <FormControlLabel value="female" control={<Radio />} label="Female" />
//     //     <FormControlLabel value="other" control={<Radio />} label="Other" />
//     //   </RadioGroup>
//     // </FormControl>
//     <Inputcomponent/>
//   );
// }

// export default MyRadioButtons;

