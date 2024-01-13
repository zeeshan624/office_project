import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/product'
import productCart from '../../app/store/slice/cart'

import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        productArray: productSlice, //prodcut array wahi hai jo hume ne store ke ander product slice bani hai
        CarttArray: productCart, // cartarray wohi hai proct cart bnai he hum ne or hai productarray,cart array inka name bi chaneg kr sakte hai 
     


    },
  
})

    
// ye same copy paste krnni koi changing nai krni hai documentations se 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)