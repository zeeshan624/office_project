import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar
  
} from 'drizzle-orm/pg-core';

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const user_table = pgTable(
  'task',
  {
    id: serial('id').primaryKey(),

    task_description: varchar("task_description"),
    location : varchar("location"),
    dts_name : varchar("dts_name"),
    material : varchar("material")
  },

);


export const user_table2 = pgTable(
  'task2',
{

  id: integer("id").primaryKey(),
  task_description: varchar("task_description"),
    location : varchar("location"),
    dts_name : varchar("dts_name"),
    material : varchar("material"),
    status: varchar("status").notNull().default('Pending')

}

);

