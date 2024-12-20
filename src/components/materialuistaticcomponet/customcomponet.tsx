import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Buttondata from "./Button";

export default function CustomComponent({data,jegini,name}) {
    // const {props.data}=props
  return (
    <div>
      {data.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="error" component="h1">
              lllllllllllllllllllllllllll
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Buttondata 
        functiondata={() => {
          alert("i am from custom component");
        }}
      />
    </div>
  );
}


// for the inbuild component we will pass the vlaue for the props with the help of 
// our custome component

// inbuil-componet ki key send with the help of the prop key

// https://mui.com/material-ui/api/typography/