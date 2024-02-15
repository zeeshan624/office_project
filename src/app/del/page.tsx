"use client"


import { useState } from "react";

const Page = () => {
  const [id, setID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const correctPassword: string = 'Karachi@1234';

  const handleDelete = async () => {
    try {
      if (!id) {
        console.error('User ID is missing.');
        return;
      }

      if (password !== correctPassword) {
        console.error('Incorrect password.');
        return;
      }

      console.log('Deleting user with ID:', id);

      await fetch(
        // `http://localhost:3000/api/task2/${id}`
        `https://office-project-lake.vercel.app/api/task2/${id}`
      , {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type='text'
          placeholder='User ID'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          className='p-3 bg-green-300 text-lg rounded-lg'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleDelete} className="mt-4 p-3 bg-green-500 text-white rounded-lg">Delete User</button>
    </div>
  );
};

export default Page;

