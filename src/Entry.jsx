import { EntryDetails } from "./EntryDetails";
import { TimeLocation } from "./TimeLocation";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flex, row, center, column } from "./flexstyle";

const entrycss = css`
  width: 600px;
  color: #666;
  margin: 0 7rem;
  display: grid;
  grid-template-columns: 200px 300px;
  justify-content: center;
  gap: 1rem;
  > * {
  }
  > *:firstchild {
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
