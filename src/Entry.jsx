import { EntryDetails } from "./EntryDetails";
import { TimeLocation } from "./TimeLocation";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flex, row, center, column } from "./flexstyle";

const entrycss = css`
  width: 600px;
  color: #666;
  margin: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap 1rem; > * {
    display: flex;
    ${column}
    ${center}
  }
`;

export function Entry({ source }) {
  return (
    <div css={entrycss}>
      <TimeLocation source={source} />
      <EntryDetails source={source} />
    </div>
  );
}
