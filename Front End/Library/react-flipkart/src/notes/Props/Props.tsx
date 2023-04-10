function Calu(gift1:any){
    return <p>hello im venugopal {gift1}</p>
}
let Another:React.FC<{gift1:string}>=(props)=>{
    console.log("----",props)
    return <>{props.gift1}</>
}
interface IAnothe1r{
    gift1:string
    g2:string
}
let Another1:React.FC<IAnothe1r>=(props)=>{
    return <>{props.g2+"    "+props.gift1}</>
}

export const Props=()=>{
    return <><h1>im a prop component</h1>
    {/* <Calu /> */}
     {Calu("watch")}
     <Another gift1={"bike"}/>
     <Another gift1={"car"}/>

     {Another({gift1:'watch'})}

     <Another1 gift1={"1212334"} g2={"india"}/>
    </>
}