// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import type { Measurement } from "./types";

export async function getMeasurements() {
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`SELECT * from measurements`;
  return data as Measurement[];
}

export async function deleteMeasurement(id: string) {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`DELETE FROM measurements where id=${id}`;
  revalidatePath("/");
}
