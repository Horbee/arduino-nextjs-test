import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function POST(request: Request, response: Response) {
  const body = await request.json();

  const sql = neon(process.env.DATABASE_URL!);
  await sql`INSERT INTO testtable (text) values (${body.text})`;

  revalidatePath("/");

  return new Response("Created", {
    status: 201,
  });
}
