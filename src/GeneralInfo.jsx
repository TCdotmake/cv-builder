export function GeneralInfo({ info }) {
  return (
    <div>
      <h3 className="hidden">General Info</h3>
      <p>{info.name}</p>
      <p>{info.email}</p>
      <p>{info.phone}</p>
    </div>
  );
}
