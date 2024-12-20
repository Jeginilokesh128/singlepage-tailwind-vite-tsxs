// import React, { useState } from "react";
// import { Button, TextField } from "@mui/material";
// import { useForm } from "react-hook-form";

// export default function InputComponent() {
// const { register, handleSubmit } = useForm();

// const onSubmit = (data) => {
//   console.log(data); // Logs all the input values
// };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" {...register("firstname")} placeholder="First Name" />
//         <input {...register("email")} placeholder="Email" type="email" />
//         <button type="submit">Submit</button>
//       </form>
      
//     </div>
//   );
// }



import React from "react";
import { useForm } from "react-hook-form";

export default function InputComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // This will only log data if validation passes
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstname", {
          required: "First Name is required",
          maxLength: {
            value: 4,
            message: "Max length is 4 characters",
          },
        })}
        placeholder="First Name"
      />
      {/* Show error message if validation fails */}
      {errors.firstname && (
        <p style={{ color: "red" }}>{errors.firstname.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}



