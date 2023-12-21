/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flex, row, center, column } from "./flexstyle";

export function GeneralInfo({ info }) {
  return (
    <div css={(flex, column, center)}>
      <h3 className="hidden">General Info</h3>
      <h4>{info.name}</h4>
      <div css={[flex, row, center]}>
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </div>
    </div>
  );
}
