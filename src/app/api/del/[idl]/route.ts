// import { NextResponse } from 'next/server';
// import { db, user_table2 } from '@/app/lib/drizzle';
// import { eq } from 'drizzle-orm';

// export async function DEL(request: Request, {params}:{params:{id:string}}) {
//     const id = parseInt(params.id);
    
//   console.log(id);
  
//     await db.delete(user_table2).where(eq(user_table2.id, id));
//     return NextResponse.json("Get handle")
//   }