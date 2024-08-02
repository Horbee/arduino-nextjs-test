import { getMeasurements } from "./action";
import { MeasurementItem } from "./MeasurementItem";

export const revalidate = 0;

export default async function Home() {
  const data = await getMeasurements();

  return (
    <div>
      <h1 className="text-2xl mb-4">Measurements: </h1>

      <div className="grid w-full grid-cols-6 text-center">
        <div className="font-bold">ID</div>
        <div className="font-bold">Temperature</div>
        <div className="font-bold">Pressure</div>
        <div className="font-bold">Humidity</div>
        <div className="font-bold">Created At</div>
        <div className="font-bold">Actions</div>

        {data.map((item) => (
          <MeasurementItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
