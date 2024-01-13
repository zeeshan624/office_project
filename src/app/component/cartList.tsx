"use client"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { deleteCart } from "../store/slice/cart"

const CartList = () => {
    const cart=useAppSelector((state)=>state.CarttArray)
    const dispatch=useAppDispatch()
  return (
<div>
    

<div >
    {cart.map((cart,i)=>{
        return(
            <div className='grid grid-cols-6 gap-4 mt-4' key={i} >
        <div>{cart.name}</div>           
        <div>{cart.catergory}</div>
        <div>{cart.dts}</div>
        <div>{cart.material}</div>
             <div>   <button 
               className='bg-indigo-700 p-2 text-black hover:bg-gray-600 rounded-2xl '
             onClick={()=>dispatch(deleteCart(cart.name))}
               >delete cart</button></div>
            </div>
        )

    })}
</div>



</div>
  )
}
export default CartList