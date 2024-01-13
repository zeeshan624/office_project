import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// create interface to define types
interface ProductState{
    name:string,
    catergory:string,
    dts:any
    material:any
    rating?:any
}

const initialState:ProductState[]=[]

const productSlice =createSlice({ //create slice by default fuction define hai 
    name:"product",                 //is me jo parameter pass kye hai ye object me defice varialble ap change kr sakte hai but define paramteer ye rkne hai
    initialState,   // yha apna data provide krege {}object ke ander jo apko sare project pe rander krna hai
    reducers:{                  //jo be apki pure page project pe fuction defince krna wo reducer me define dena hoga 
        addProduct(state, action) {
            // Check if the product's name is not empty before adding it to the cart
            if (action.payload.name.trim() !== "") {
              state.push(action.payload);
            } else {
              alert("Product name is empty. Product not added to cart.");
            }
        }  ,  
        deleteProduct(state,action){}
    }
})

export const  {addProduct,deleteProduct  }=productSlice.actions //ye reduccer fucntion is lye export kr rahe take tmam page isko import kr sake 
// productSlice.actin by default is tarh likha documetns me
export default productSlice.reducer // productSlice.reducer doumentation ke mtabiq is trah likha hai  