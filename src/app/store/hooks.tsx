import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// ye hook is lye bayan take hume jha bi data rander krna hoga wha hume srf useappselector use krege or 
// jha fucntion use krana hoga wha use aap dispath use krna 
//ager ye page nahi bante to hume neche dye hi type or import sub again type krna hota
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector