import { deleteMeasurement } from "./action";
import { Measurement } from "./types";

export const MeasurementItem = ({ item }: { item: Measurement }) => {
  const deleteMeasurementWithId = deleteMeasurement.bind(null, String(item.id));

  return (
    <>
      <div>{item.id}</div>
      <div>{item.temperature}</div>
      <div>{item.pressure}</div>
      <div>{item.humidity}</div>
      <div>{new Date(item.created_at).toISOString()}</div>
      <div>
        <form action={deleteMeasurementWithId}>
          <button type="submit" className="text-red-600">
            Delete
          </button>
        </form>
      </div>
    </>
  );
};
