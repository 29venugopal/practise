import { Carousel } from "react-bootstrap"
import img1 from '../../static/1.img.jpg'
import img2 from '../../static/5.img.jpeg'
import img3 from '../../static/3.img.jpg'
import { Grid } from "@mui/material"


export const Myslider:React.FC=()=>{
  return <>
  <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
  <Carousel>
    <Carousel.Item>
      <img height="500px"
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>First slide label</h1>
        <p>
        Nature is defined as our environment. It is the interaction between the physical world around us and the life within it like the atmosphere, climate, natural resources, ecosystem, flora, fauna and humans.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img height="500px"
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h1>Second slide label</h1>
        <p>    
           Nature is defined as our environment. It is the interaction between the physical world around us and the life within it like the atmosphere, climate, natural resources, ecosystem, flora, fauna and humans.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img height="500px"
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>Third slide label</h1>
        <p>
        Nature is defined as our environment. It is the interaction between the physical world around us and the life within it like the atmosphere, climate, natural resources, ecosystem, flora, fauna and humans.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Grid>
  </>

}