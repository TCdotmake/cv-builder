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
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: auto;
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
