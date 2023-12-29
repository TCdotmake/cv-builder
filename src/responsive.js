import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";

const screen400 = css`
  @media screen and (max-width: 400px) {
    ${flex}
    ${column}
    ${center}
  }
`;

export { screen400 };
