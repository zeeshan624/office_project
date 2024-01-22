import { useState } from 'react';
import { CldUploadButton, CldImage } from 'next-cloudinary';

const ProductList = () => {
  const [id, setID] = useState('');
  const [task_description, setTaskDescription] = useState('');
  const [location, setLocation] = useState('');
  const [dts_name, setDtsName] = useState('');
  const [material, setMaterial] = useState('');

  const handlePost = async () => {
    await fetch('https://office-project-97ivx5sah-furqans-projects.vercel.app/api', {
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
  };



  return (
    <div>
      <div className='grid grid-cols-6 gap-3 bg-green-500'>
        {/* Display the serial number */}
        <input
          type='text'
          placeholder='Serial Number'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={id}
          onChange={(e) => setID(e.target.value)}
        />

        {/* Other input fields */}
        <input
          type='text'
          placeholder='task_description'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={task_description}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <input
          type='text'
          placeholder='location'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type='text'
          placeholder='dts_name'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={dts_name}
          onChange={(e) => setDtsName(e.target.value)}
        />

        <input
          type='text'
          placeholder='material'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
        <CldUploadButton uploadPreset='uvsjjlg2' />

        <CldImage
          width='960'
          height='600'
          src='ufoifyzbgmne9fxrjszm'
          sizes='100vw'
          alt='Description of my image'
        />
      </div>
      <br />
      <div className='h-6 w-20 bg-slate-700 rounded-full justify-center'>
        <button onClick={handlePost}>Add Item</button>
      </div>
      <div className='grid grid-cols-5 gap-3 mt-3'></div>
    </div>
  );
};

export default ProductList;
