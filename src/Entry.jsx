import { EntryDetails } from "./EntryDetails";
import { TimeLocation } from "./TimeLocation";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flex, row, center } from "./flexstyle";
export function Entry({ source }) {
  return (
    <div>
      <TimeLocation source={source} />
      <EntryDetails source={source} />
    </div>
  );
}
