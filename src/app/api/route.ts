
import { NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { user_table,db, user_table2 } from '@/app/lib/drizzle';



export async function GET(request: Request) {
    

  
  const user = await db.select().from(user_table2);
  console.log("route",user);
    return NextResponse.json(user);
  }
export async function POST (request: Request) {
    
  const body = await request.json();
  console.log("route",body);
 await db.insert(user_table2).values(body);
 
    return NextResponse.json("helo");
  }