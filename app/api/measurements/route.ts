import { Measurement } from "@/app/types";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

type Body = Pick<Measurement, "temperature" | "pressure" | "humidity">;

export async function POST(request: Request) {
  const body = (await request.json()) as Body;

  if (!body.temperature || !body.humidity || !body.pressure) {
    return new Response(
      "Body must contain temperature, humidity and pressure values.",
      {
        status: 400,
      }
    );
  }

  const sql = neon(process.env.DATABASE_URL!);
  await sql`INSERT INTO measurements (temperature, humidity, pressure) values (${body.temperature}, ${body.humidity}, ${body.pressure})`;

  revalidatePath("/");

  return new Response("Created", {
    status: 201,
  });
}
