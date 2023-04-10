import { Button, Container, Grid, TextField } from "@mui/material";
import { Formik } from "formik";


export const Myselleruploadform:React.FC=()=>{
    return <>
    <Formik
      initialValues={{ name:'',image:'',price:'' ,title:''}}
      validate={values => {
       interface Ierrors{
         email?:string
       }
        const errors:Ierrors = {};
       
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
      
          setSubmitting(false);
        }, 400);
      }}
    >
{({handleSubmit, handleChange,values})=>{return <>
 <form onSubmit={handleSubmit}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

        <h1>Seller Upload Form</h1>


<TextField
 style={{marginBottom:'25PX'}} 
id="outlined-basic" 
label="name" 
variant="outlined" 
type="text"
 name="name"
 value={values.name}
 onChange={handleChange}
/>


<TextField
  style={{marginBottom:'25PX'}}
   id="outlined-basic"
    label="price"
     variant="outlined"
     type="number"
 name="price"
 value={values.price}
 onChange={handleChange}
      />


<TextField
  style={{marginBottom:'25PX'}}
   id="outlined-basic"
    label="image" 
    variant="outlined"
    type="file"
    name="image"
    value={values.image}
    onChange={handleChange}
    />


<TextField
  style={{marginBottom:'25PX'}}
   id="outlined-basic"
    label="title" 
    variant="outlined"
    type="text"
    name="title"
    value={values.title}
    onChange={handleChange}
    />

<Button type="submit" variant="contained" color="success">
  Success
</Button>

</Grid>

</form>

</>}}

     </Formik>

   </>
}