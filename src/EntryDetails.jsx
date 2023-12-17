export function EntryDetails({ source }) {
  return (
    <div>
      <h4 className="hidden">Education Details</h4>
      {source.place && <h5>{source.place}</h5>}
      {source.title && <p>{source.title}</p>}
      {source.details && <p>{source.details}</p>}
    </div>
  );
}
