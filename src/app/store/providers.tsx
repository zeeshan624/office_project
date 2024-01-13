"use client"
import React from "react"
import {Provider} from "react-redux"
import { store } from "./store"
const Providers = ({  // childer file layout se copy kri hai 
    children,
  }: {
    children: React.ReactNode
  }) => {

    
  return (
   <Provider store={store}> {children}</Provider>
  )
}
export default Providers
// layout se childer ko copy kra hai or provider import kra hai react-redux se or provider me children ka dal diya
//provider ko ek prop passs kra jis me store ko import kr ke pass kr dya ye step no 5 hai 