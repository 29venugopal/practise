import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { flipkartapi } from "../../api/flipkart.api"
import { Mycards } from "../../components/cards/Mycards"



export const CardList: React.FC = () => {
 let [pro,setPro]=useState<any>();
 useEffect(()=>{

    (async()=>{
        let data= await flipkartapi()
        setPro(data)
        })()

 },[]);

    return <>
    
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
{
   pro?.map((item:any)=>{
return <Mycards img={item.image} />
   })
}
        </Grid>

    </>
}