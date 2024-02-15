import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

const ProductList = () => {
  const [id, setID] = useState('');
  const [task_description, setTaskDescription] = useState('');
  const [location, setLocation] = useState('');
  const [dts_name, setDtsName] = useState('');
  const [material, setMaterial] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const alert = () => {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>your task successfully added</AlertTitle>
      </Alert>
    )
  };

  const handlePost = async () => {
    // Your fetch logic here
    await
     fetch(
      'https://office-project-lake.vercel.app/api'
    // "http://localhost:3000/api"

     , {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify({
        id,
        task_description,
        dts_name,
        location,
        material,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // After the post request is done, show the alert
    setShowAlert(true);
  };

  return (
    <div className='bg-white p-4 md:p-8 lg:p-12'>
      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="id">S.No:</label>
          <input
            type='text'
            id="id"
            placeholder='Serial Number'
            className='h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300'
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="task_description">Task Description:</label>
          <input
            type='text'
            id="task_description"
            placeholder='Task Description'
            className='h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300'
            value={task_description}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type='text'
            id="location"
            placeholder='Location'
            className='h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dts_name">Dts Name:</label>
          <input
            type='text'
            id="dts_name"
            placeholder='Dts Name'
            className='h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300'
            value={dts_name}
            onChange={(e) => setDtsName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="material">Material:</label>
          <input
            type='text'
            id="material"
            placeholder='Material'
            className='h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300'
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>
      </div>
      
      {/* Button to handle post request and show alert */}
      <button onClick={handlePost} className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300'>Add Item</button>

      {/* Alert component */}
      {showAlert && alert()}

      <div className='grid grid-cols-5 gap-3 mt-3'></div>
    </div>
  );
};

export default ProductList;
