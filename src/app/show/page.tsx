"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

let url = "https://office-project-lake.vercel.app//api";

const getData = async () => {
  let res = await fetch(url,{
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

interface Data {
  id: number;
  task_description: any;
  location: any;
  dts_name: any;
  material: any;
}

export default function Show() {
  
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData();
      setData(res);
    
    };

    fetchData();
  }, []);

  return (
    <div><button> Delete Data by ID<Link href={"/del"}></Link></button>
    <div className="max-w-screen-md mx-auto mt-8">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">ID</th>
            <th className="border p-2">Task Description</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">DTS Name</th>
            <th className="border p-2">Material</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: Data) => (
            <tr key={item.location} className="bg-white">
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.task_description}</td>
              <td className="border p-2">{item.location}</td>
              <td className="border p-2">{item.dts_name}</td>
              <td className="border p-2">{item.material}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </div>
  );
}
