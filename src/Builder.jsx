import { GeneralInfoInput } from "./GeneralInfoInput";
import { OtherInfoInput } from "./OtherInfoInput";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";
import { hidden } from "./otherstyle";

const buildercss = css`
  width: 360px;
  ${flex}
  ${column}
  background: #b0b2b8;
  padding-top: 4rem;
  > * {
    ${flex}
    ${column}
    ${center}
  }
`;

function Builder({ updateInfo, edu, prof, info, setedu, setprof }) {
  return (
    <section css={buildercss}>
      <h2 css={hidden}>CV Builder Input</h2>
      <GeneralInfoInput info={info} updateInfo={updateInfo} />
      <OtherInfoInput title="Education" data={edu} setter={setedu} />
      <OtherInfoInput
        title="Professional Experience"
        data={prof}
        setter={setprof}
      />
    </section>
  );
}

export default Builder;
