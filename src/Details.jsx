import { Entry } from "./Entry";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { column, flex } from "./flexstyle";
const titlecss = css`
  margin-bottom: 1.5rem;
  text-decoration: underline;
`;
const entriescss = css`
  ${flex}
  ${column}
  gap: 1.5rem;
`;
function Details({ data, title }) {
  if (Object.keys(data).length > 0) {
    return (
      <div>
        <h3 css={titlecss}>{title}</h3>
        <div css={entriescss}>
          {Object.keys(data).map((item) => {
            return <Entry key={item} source={data[item]} />;
          })}
        </div>
      </div>
    );
  }
}

export default Details;
