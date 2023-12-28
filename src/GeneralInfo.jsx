/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flex, row, center, column } from "./flexstyle";

const gencss = css`
  padding: 4rem 0;
  background: #b0b2b8;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const namecss = css`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const divcss = css`
  gap: 2ch;
  > * {
    font-size: 1.2rem;
  }
`;

export function GeneralInfo({ info }) {
  return (
    <div css={(flex, column, center, gencss)}>
      <h3 className="hidden">General Info</h3>
      <h4 css={namecss}>{info.name}</h4>
      <div css={[flex, row, center, divcss]}>
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </div>
    </div>
  );
}
