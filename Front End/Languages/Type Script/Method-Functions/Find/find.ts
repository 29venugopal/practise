let myitems=[
    {a:'apple',b:'banana'},
    {a:'apple',b:'banana',c:'cat'},
    {a:'apple',b:'banana',c:'cat'},
    {a:'apple',b:'banana',d:'dog'}]
    let item=myitems.find((item)=>{ return item.c=='cat'})
    console.log(item)