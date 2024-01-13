import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useAmp } from 'next/amp'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks'
// import type { RootState } from '../../app/store'

interface CartState{
    name:string,
    catergory:string,
    dts:any
    material:any
    rating?:any
}
const initialState:CartState[]=[]

const cartSlice =createSlice({ //create slice by default fuction define hai 
    name:"cart",                 //is me jo parameter pass kye hai ye object me defice varialble ap change kr sakte hai but define paramteer ye rkne hai
    initialState,
    reducers:{                  //jo be apki pure page project pe fuction defince krna wo reducer me define dena hoga 
        addCart(state,{payload}){
             // yha payload islye likha state me job data ara hai wo payload me ara hai
             const obj= state.find((cart)=>cart.name!=payload.name)
             if(obj){
                ++obj.rating
                const newState=state.filter((cart)=>cart.name!==obj.name)
                state=[...newState,obj]
                return;
            }
        state.push(payload)
            }  ,  
        deleteCart(state,action){
            return state.filter(cart=>cart.name!==action.payload)
        }
    }
})

export const  {addCart,deleteCart}=cartSlice.actions //ye reduccer fucntion is lye export kr rahe take tmam page isko import kr sake 
// cartSlice.actin by default is tarh likha documetns me
export default cartSlice.reducer // productSlice.reducer doumentation ke mtabiq is trah likha hai  