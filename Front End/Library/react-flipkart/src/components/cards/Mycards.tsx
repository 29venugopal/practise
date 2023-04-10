import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

import { Interface } from "readline"
interface IMyCard{
  img:string
}
export const Mycards:React.FC<IMyCard>=({img})=>{
   return <>
     <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A product line is "a group of products that are closely related, either because they function in a similar manner, are sold to the same customer groups, are marketed through the same types of outlets, or fall within given price ranges.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
}