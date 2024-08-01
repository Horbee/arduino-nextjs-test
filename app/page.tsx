import { getData } from "./action";

export const revalidate = 0;

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div>
      <h1 className="text-2xl">Items: </h1>

      {data.map((item) => (
        <div key={item.id} className="flex gap-4 pl-4">
          <p>{item.id}.</p>
          <p>{item.text}</p>
          <p>{new Date(item.time).toISOString()}</p>
        </div>
      ))}
    </div>
  );
}
