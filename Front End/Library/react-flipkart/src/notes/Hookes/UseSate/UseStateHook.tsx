import { useState } from "react"

export const UseStateHook:React.FC=()=>{
    let [name,setName]=useState('--------Venu Gopal')
    let [userdata,setUserdata]=useState("")
    
    let inputcapture=(e:any)=>{
        console.log(e.target.value)
        setUserdata(e.target.value)
    }
let display=()=>{
    setName(userdata)
}
    return <>
    <input type="text" onChange={inputcapture}/>
    <button onClick={display}>click me</button>
    {name+"--------------"}
    </>
}