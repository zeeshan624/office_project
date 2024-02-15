"use client"



import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Data {
  id: number;
  task_description: string;
  location: string;
  dts_name: string;
  material: string;
  status: string;
}

const url = 
"https://office-project-lake.vercel.app/api";
// "http://localhost:3000/api";

const getData = async (): Promise<Data[]> => {
  let res = await fetch(url, {
    cache: "no-store",
  });
  const data: Data[] = await res.json();
  return data;
};

const updateStatusById = async (id: number): Promise<Data> => {
  try {
    const res = await fetch(`https://office-project-lake.vercel.app/api/task2/${id}`, {
      method: 'PUT', // Changed method to PUT
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'complete' })
    });

    if (!res.ok) {
      throw new Error('Failed to update status');
    }

    const data: Data = await res.json();
    return data;
  } catch (error) {
    console.error('Error updating status:', error);
    throw error;
  }
};

export default function Show() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      setData(res);
    };
    fetchData();
  }, []);

  const handleStatusUpdate = async (id: number) => {
    try {
      await updateStatusById(id);
      const updatedData = await getData();
      setData(updatedData);
    } catch (error) {
      // Handle error
      console.error('Failed to update status:', error);
    }
  };

  return (
    <div>
      <Link href={"/del"}> Delete Data by ID</Link>
      <div className="max-w-screen-md mx-auto mt-8">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">ID</th>
              <th className="border p-2">Task Description</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">DTS Name</th>
              <th className="border p-2">Material</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: Data) => (
              <tr key={item.id} className="bg-white">
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.task_description}</td>
                <td className="border p-2">{item.location}</td>
                <td className="border p-2">{item.dts_name}</td>
                <td className="border p-2">{item.material}</td>
                <td className="border p-2">{item.status}</td>
                <td className="border p-2">
                  {item.status !== 'complete' && (
                    <button onClick={() => handleStatusUpdate(item.id)}>Update Status</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
