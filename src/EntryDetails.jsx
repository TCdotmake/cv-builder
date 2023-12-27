/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const detailcss = css`
  font-size: 0.9rem;
  text-align: start;
`;

const titlecss = css`
  font-size: 1.1rem;
`;

export function EntryDetails({ source }) {
  return (
    <div>
      <h4 className="hidden">Education Details</h4>
      {source.place && <h5>{source.place}</h5>}
      {source.title && <p css={titlecss}>{source.title}</p>}
      {source.details && <p css={detailcss}>{source.details}</p>}
    </div>
  );
}
