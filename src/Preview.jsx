import { GeneralInfo } from "./GeneralInfo";
import Details from "./Details";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";
function Preview({ info, edu, prof }) {
  return (
    <section css={[flex, column, center]}>
      <h2 className="hidden">Preview</h2>
      <GeneralInfo info={info} />
      <Details data={edu} title="Education" />
      <Details data={prof} title="Professional Experience" />
    </section>
  );
}

export default Preview;
