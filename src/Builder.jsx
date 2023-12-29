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
  padding: 2rem 0;
  > * {
    ${flex}
    ${column}
    ${center}
    gap: 1rem;
  }
  @media screen and (max-width: 739px) {
    height: calc(100vh - 2rem);
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
