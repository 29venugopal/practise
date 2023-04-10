let Mybutton1=()=>{
    return <button>click me</button>
}
let Mybutton2=()=>{
    return <button>click me2</button>
}

export const A_tsx:React.FC<{}>=()=>{
    let a="a"
    return<>
     <Mybutton1/>
     {

     }
     {2+2}
     {a=="a1"?<Mybutton2/>:<h1>no button</h1>}
    </>
}