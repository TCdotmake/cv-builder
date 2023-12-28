/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";

const formcss = css`
  width: 250px;

  > * {
    width: 100%;
    display: block;
  }
  > input {
    height: 4.5ch;
    border-radius: 5px;
    padding-left: 2ch;
  }
  > label {
    font-size: 1rem;
    text-align: start;
  }
  > div {
    ${flex}
    ${center}
    gap: 0.8rem;
    margin-top: 1rem;
  }
  > div button {
    display: inline;
    width: auto;
    padding: 0.2rem;
    border-radius: 0.2rem;
    font-size: 1rem;
  }
  > div button:first-child {
    margin-right: auto;
  }
  ${flex}
  ${column}
${center}
`;

const inputwindowcss = css`
  width: 300px;
  border: 1px solid #666;
  border-radius: 10px;
  margin-top: 10px;
  ${flex}
  ${center}
  padding: 1rem 0 1.5rem 0;
  > form {
    ${formcss}
  }
`;

export { formcss, inputwindowcss };
