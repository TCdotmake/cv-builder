/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";
const timecss = css`
  padding-left: 0;
  padding-right: 0;
  @media screen and (max-width: 950px) {
    width: 250px;
    margin-bottom: 1rem;
    > p {
      text-align: start;
    }
  }
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
      <p>{time}</p>
      {source.location && <p>{source.location}</p>}
    </div>
  );
}
