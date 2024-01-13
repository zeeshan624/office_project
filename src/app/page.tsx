"use client"
import CartList from "./component/cartList";
import ProductList from "./component/productlist";




export default function Home() {
  // const {data1}=useGetallPostQuery("")
//  const {data} useGetallPostQuery("")
// const {data }=useGetallIDQuery(7)

  return (
   <div className="border-b-gray-700 back   " >
    name=<input type="text" />
    <br>
  </br>
  {/* <button onClick={()=>(updatePost({name:"Fuqan",id:111}))} >
add Post
  </button> */}
<ProductList/>
<h1 className="text-3xl "> Cart List
  </h1>
  <CartList/>
 

   </div>
  )
}
