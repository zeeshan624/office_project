
import { NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { user_table, db, user_table2 } from '@/app/lib/drizzle';
import { eq } from 'drizzle-orm';
import { PgDeleteBase } from 'drizzle-orm/pg-core';
import { comment } from 'postcss';



export async function GET(request: Request) {



  const user = await db.select().from(user_table2);
  console.log("route", user);
  return NextResponse.json(user);
}
export async function POST(request: Request) {

  const body = await request.json();
  console.log("route", body);
  await db.insert(user_table2).values(body);

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

export async function DELETE(request: Request, {params}:{params:{id:number}}) {
    const id = (params.id);
    
  console.log(id);
  
    await db.delete(user_table2).where(eq(user_table2.id, id));
    return NextResponse.json("Get handleew")
  }