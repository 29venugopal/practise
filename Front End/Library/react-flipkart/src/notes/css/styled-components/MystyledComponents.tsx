import react from 'react'
import styled from 'styled-components'
interface IMyh1{
    mycolor:string
}
let Myh1=styled.h1<IMyh1>`
background-color:${(props:any)=>{return props.mycolor}};
color:white;
font-size:50px;
`
export const MystyledComponents:react.FC=()=>{
    return <>
    <Myh1 mycolor={"blue"}> hello i am styled component </Myh1>
    <Myh1 mycolor={"green"}> hello i am styled component </Myh1>
    <h1 style={{backgroundColor:'red'}}> hello i am normal</h1>

</>
}