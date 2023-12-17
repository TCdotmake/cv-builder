import { EntryDetails } from "./EntryDetails";
import { TimeLocation } from "./TimeLocation";

export function Entry({ source }) {
  return (
    <div>
      <TimeLocation source={source} />
      <EntryDetails source={source} />
    </div>
  );
}
