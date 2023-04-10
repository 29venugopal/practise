import { Button, Container, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import React from 'react'
import { useNavigate } from "react-router-dom";


export const Mylogin:React.FC=()=>{
  let navigate=useNavigate()
    return <>
    <Container >
    <Formik
       initialValues={{ email: '', password: '' }}
       validate={(values: { email: string; }) => {
        interface Ierrors{
          email?:string
        }
         const errors:Ierrors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values: any, { setSubmitting }: any) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           navigate('/project/home')
           setSubmitting(false);
         }, 400);
       }}
     >
{({handleSubmit, handleChange, values})=>{return <>
  <form onSubmit={handleSubmit}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

        <h1>Log In</h1>




<TextField
  style={{marginBottom:'25PX'}}
   id="outlined-basic"
    label="email"
     variant="outlined"
     type="email"
 name="email"
 value={values.email}
 onChange={handleChange}
      />


<TextField
  style={{marginBottom:'25PX'}}
   id="outlined-basic"
    label="password" 
    variant="outlined"
    type="password"
    name="password"
    value={values.password}
    onChange={handleChange}
    />

<Button type="submit" variant="contained" color="success">
  Success
</Button>

</Grid>

</form>

</>}}

     </Formik>

    </Container>
  
    </>
}