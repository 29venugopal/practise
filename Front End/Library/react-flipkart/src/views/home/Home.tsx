import { Container } from "react-bootstrap"
import { MyNavbar1 } from "../../components/navbar/MyNavbar1"
import { Myslider } from "../../components/sliders/Myslider"
import { Grid } from "@mui/material"
import { Mycards } from "../../components/cards/Mycards"
import { Myselleruploadform } from "../../components/forms/Myselleruploadform"
import { CardList } from "./CardList"

export const Home:React.FC=()=>{
  
   return <>
     <Container>
      <br />
        <Myslider/>      
        <br />
  
  <CardList/>
          

     </Container>
   </>
}