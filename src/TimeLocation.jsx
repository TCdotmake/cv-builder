/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";
const timecss = css`
  ${flex}
  ${column}
  ${center}
  font-size: 0.9rem;
  padding-left: 0;
  padding-right: 0;
`;
export function TimeLocation({ source }) {
  let time;
  if (source.start && source.end) {
    time = <p>{`${source.start} - ${source.end}`}</p>;
  } else if (source.start || source.end) {
    time = <p>{source.start || source.end}</p>;
  } else {
    time = null;
  }
  return (
    <div css={timecss}>
      <h4 className="hidden">Time and Location</h4>
      {time}
      {source.location && <p>{source.location}</p>}
    </div>
  );
}
