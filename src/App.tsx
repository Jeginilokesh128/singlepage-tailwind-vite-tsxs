import { useState } from "react";
import BoxBasic from "./components/Box.tsx"
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
// Define the type for the data object
interface Data {
  name: string;
  age: string;
}

// Define the props type for ChildComponent
interface ChildComponentProps {
  data: Data;
}

// Define the props type for SubComponent
interface SubComponentProps {
  Props: { data: Data }; // Props contains data of type Data
}

const App: React.FC = () => {
  const [data, setData] = useState<Data>({
    name: "jegini",
    age: "26",
  });

  return (
    <>
      <h2>{`${data.name}`}</h2>
      {/* Pass the `data` as a prop to `ChildComponent` */}
      <Childcomponet data={data} />
      <BoxBasic/>
    </>
  );
};

const Childcomponet: React.FC<ChildComponentProps> = ({ data }) => {
  return (
    <>
      <h3>child component</h3>
      {/* Pass the `data` as a prop to `SubComponent` */}
      <Subcomponet Props={{ data }} />
    </>
  );
};

const Subcomponet: React.FC<SubComponentProps> = ({ Props }) => {
  return <h3>{`${Props.data.age}`}</h3>; // Access the `age` property from the `data` object
};

export default App;
// js
// -------------
// primitive data type
// let data: number | null = null;

// 1)number 2)string 3)boolean 4)null 5)undefined

// interface Data {
//   name: string;
//   age: number | null;  // Allow age to be either a number or null
// }

// // Initialize with an empty string for name and null for age
// let data: Data = {
//   name: "",
//   age: null
// };

// console.log(data);

//array Array--[]
// let arraydata:Array<number>=[1,2,3,4]
// let arraydata: number[] = [1, 2, 3, 4];

// Function that adds two numbers
// function add(a: number, b: number): number {
//   return a + b;
// }
// (message: string): void
// reactjs
// -------------
// setdata() we will not explicitly define the data type
// object data type


// const App: React.FC = () => {
//   const [data, setData] = useState<Data>({
//     name: "jegini",
//     age: "26",
//   });

// here we assing the type for the useState<> not for the varible


// // Function that takes a string and a number and returns a string
// function combine(name: string, age: number): string {
//   return `${name} is ${age} years old`;
// }
 
// const add: (a: number, b: number) => number = (a, b) => a + b;

// // Function with an optional parameter
// function greet(name: string, age?: number): string {
//   return age ? `${name} is ${age} years old` : `${name}`;
// }

// const greet = (name: string, age: number): string => {
//   return `${name} is ${age} years old.`;
// };

// console.log(greet("Alice", 30));

// function greet(name: string, age: number): string {
//   return `${name} is ${age} years old.`;
// }

// console.log(greet("Alice", 30)); 