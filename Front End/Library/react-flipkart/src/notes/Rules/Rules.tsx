function Hello(){
    return <h1>"hello im a string"</h1>
}
function Hello2(){
    return <h2>"hello im a string"</h2>
}
function Hello3(){
    return <h3>"hello im a string"</h3>
}

export const Rules=()=>{

 
    return (<>
    <h1>its all about rules</h1>
     {Hello()}
     <Hello/>
    </>)
}

