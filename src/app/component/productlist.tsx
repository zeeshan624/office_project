"use client"

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addProduct , } from '../store/slice/product';
import { addCart } from '../store/slice/cart';
import { CldUploadButton ,CldImage} from 'next-cloudinary';

const ProductList = () => {
  const dispatch = useAppDispatch()
  const [name, setname] = useState("")
  const [catergory, setcatergory] = useState("")
  const [dts, setdts] = useState("")
  const [material, setmaterial] = useState("")
  const products = useAppSelector((state) => state.productArray)
  const [image, setImage] = useState(null);

  // jab bi data call krni hogi isi triqe cal hoga 
  // product array hamari store ki file se ari ha or store me humne poruct array define kya hye product slice se


  return (
    <div>

      <div className='grid grid-cols-6 gap-3 bg-green-500'> 
        <input type='text' 
        placeholder='Job' 
        className=' p-3 bg-green-300 text-lg rounded-lg'
          value={name}
          onChange={(e) => setname(e.target.value)}
        />



        <input type='text' 
        placeholder='Location' 
        className=' p-3 bg-green-300 text-lg rounded-lg'
          value={catergory}
          onChange={(e) => setcatergory(e.target.value)}
        />
        <input type='text' 
        placeholder='Dts ID or Pole ID' 
        className=' p-3 bg-green-300 text-lg rounded-lg'
          value={dts}
          onChange={(e: any) => setdts(e.target.value)}
        />

        <input type='text' 
        placeholder='material required' 
        className=' p-3 bg-green-300 text-lg rounded-lg'
          value={material}
          onChange={(e: any) => setmaterial(e.target.value)}
        />
      <CldUploadButton uploadPreset="uvsjjlg2" />
      
 
 
<CldImage
  width="960"
  height="600"
  src="ufoifyzbgmne9fxrjszm"
  sizes="100vw"
  alt="Description of my image"
/>


      </div>
      <br>
      </br>
      <div className='h-6 w-20 bg-slate-700 rounded-full justify-center  ' >
      <button onClick={() => dispatch(addProduct({
           name: name,
           catergory: catergory, 
           dts: dts,
           material: material
           }))}
            >Add Item</button>
            </div>
      <div className='grid grid-cols-5 gap-3 mt-3'>

        {products.map((product, i) => {
          return (
            <div key={i} className='w-350  rounded-md bg-slate-300  p-4 '>
                <h1>{product.name}</h1>
                <p>{product.catergory}</p>
                <p>{product.dts}</p>
                <p>{product.material}</p>
              
              <button 
               className='bg-indigo-700 p-2 text-black hover:bg-gray-600 rounded-2xl '
              onClick={()=>dispatch(addCart({name:product.name,catergory:product.catergory,dts:product.dts,material:product.material  }))}
               >Add to cart</button>

            </div>
          )
        })}


      </div>
    </div>
  )

}
export default ProductList