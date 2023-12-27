import { GeneralInfo } from "./GeneralInfo";
import Details from "./Details";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";

const previewcss = css`
  background: white;
  color: #666;
  padding: 2rem 0 6rem 0;
  aspect-ratio: 8.5/11;
`;

function Preview({ info, edu, prof }) {
  return (
    <section css={[flex, column, previewcss]}>
      <h2 className="hidden">Preview</h2>
      <GeneralInfo info={info} />
      <Details data={edu} title="Education" />
      <Details data={prof} title="Professional Experience" />
    </section>
  );
}

export default Preview;
