"use client"

import Link from "next/link";
import ProductList from "./component/productlist";





export default function Home() {
  // const {data1}=useGetallPostQuery("")
//  const {data} useGetallPostQuery("")
// const {data }=useGetallIDQuery(7)

  return (
   <div className="border-b-gray-700 back   " >
   
    <br>
  </br>
  {/* <button onClick={()=>(updatePost({name:"Fuqan",id:111}))} >
add Post
  </button> */}
<ProductList/>

<h1 className="text-3xl "> 
<Link href={"/show"} className="flex text-3xl">show detail</Link>
<br>
</br>
<Link href={"/del"}className="flex text-3xl">delete data</Link>
  </h1>
 
 

   </div>
  )
}
