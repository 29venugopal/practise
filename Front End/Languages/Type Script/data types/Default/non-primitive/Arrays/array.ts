let fruites=["apple","banana","orange"]
console.log(fruites[0])
console.log(fruites[1])
console.log(fruites[2])
fruites.map((a)=>{console.log("its advance----:",a)})
let myitems=[
    {a:'apple',b:'banana'},
    {a:'apple',b:'banana',c:'cat'},
    {a:'apple',b:'banana',c:'cat'},
    {a:'apple',b:'banana',d:'dog'}]
    let item=myitems.find((item)=>{ return item.d=='dog'})
    console.log(item)
    let item1=myitems.filter((item)=>{ return item.c=='cat'})
    console.log(item1)