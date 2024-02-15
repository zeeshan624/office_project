
import { NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { user_table, db, user_table2 } from '@/app/lib/drizzle';
import { eq } from 'drizzle-orm';
import { PgDeleteBase } from 'drizzle-orm/pg-core';
import { comment } from 'postcss';
import { NextApiRequest, NextApiResponse } from 'next';



export async function GET(request: Request) {



  const user = await db.select().from(user_table2);
  // const user = await db.select().from(user_table);
  // console.log("route", user);
  return NextResponse.json(user);
}
export async function POST(request: Request) {

  const body = await request.json();
  console.log("route", body);
  await db.insert(user_table2).values(body);
  // await db.insert(user_table).values(body);

  return NextResponse.json("helo");
}

// export async function DEL(request: Request) {
//   await db.delete(user_table2).where(eq(user_table2.id, id));
//   console.log("Dellll", user_table2);
//   return NextResponse.json(user_table2);
// }
// export async function DEL(request: Request) {
  
  
//   const body = await request.json();
//   console.log("route del", typeof body);
//   await db.delete(user_table2).where(eq(user_table2.id, body));
//   return NextResponse.json("Get handle")
// }

export const DELETE= async(request: Request, {params}:{params:{id:number}})=> {
    const id = params.id;
    
  // console.log(id);
  
   const result= await db.delete(user_table2).where(eq(user_table2.id, id))
   .returning({id:user_table2.id});
    return NextResponse.json({message:"Get handleew",data:result})
  }



  // export default async function handler(request:Request,{params}:{params:{id:number}}) {
  //   const id = params.id;
  //   const body = await request.json();

  //     // Update the resource in the database
     
  //     const updatedData = await db.update(user_table2)
  //       .set(body).where(eq(user_table2.id,body.id))
  //       .returning({id:user_table2.id});
  //       console.log(updatedData);
  //       return NextResponse.json({message:"Get handleew", data:updatedData})
    
  
  // }
  