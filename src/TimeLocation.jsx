export function TimeLocation({ source }) {
  let time;
  if (source.start && source.end) {
    time = <p>{`${source.start} - ${source.end}`}</p>;
  } else if (source.start || source.end) {
    time = <p>{source.start || source.end}</p>;
  } else {
    time = null;
  }
  return (
    <div>
      <h4 className="hidden">Time and Location</h4>
      {time}
      {source.location && <p>{source.location}</p>}
    </div>
  );
}
