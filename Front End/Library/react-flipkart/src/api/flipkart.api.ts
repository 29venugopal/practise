export let flipkartapi=async()=>{
  let products=await  fetch('https://fakestoreapi.com/products')
  return await(await products).json()
}