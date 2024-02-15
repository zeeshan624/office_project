import { NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { user_table, db, user_table2 } from '@/app/lib/drizzle';
import { eq } from 'drizzle-orm';
export const DELETE= async(request: Request, {params}:{params:{id:number}})=> {
    const id = params.id;
    
  // console.log(id);
  
   const result= await db.delete(user_table2).where(eq(user_table2.id, id))
   .returning({id:user_table2.id});
    return NextResponse.json({message:"Get handleew",data:result})
  }

  export const PUT = async(req: Request, {params}:{params:{id:number}})=> {
    const id = params.id;
    const body = await req.json();
    console.log(body);
    const result= await db.update(user_table2).set(body).where(eq(user_table2.id, id))
    .returning({id:user_table2.id});
    return NextResponse.json({message:"Get handleew", data:result})
  }
  

  