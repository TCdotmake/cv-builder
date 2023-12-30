import { GeneralInfo } from "./GeneralInfo";
import Details from "./Details";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";

const previewcss = css`
  background: var(--white);
  color: var(--gray);
  width: 720px;
  > * {
    margin-bottom: 2.5rem;
  }
  @media screen and (max-width: 950px) {
    width: 360px;
  }
`;

function Preview({ info, edu, prof }) {
  return (
    <section css={[flex, column, center, previewcss]}>
      <h2 className="hidden">Preview</h2>
      <GeneralInfo info={info} />
      <Details data={edu} title="Education" />
      <Details data={prof} title="Professional Experience" />
    </section>
  );
}

export default Preview;
