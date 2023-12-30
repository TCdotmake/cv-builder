import { css } from "@emotion/react";

const titlebtn = css`
  width: 300px;
  margin-top: 20px;
  background: var(--primary);
  color: var(--white);
`;

const entrybtn = css`
  width: 250px;
  margin-top: 10px;
  background: var(--primary);
  color: var(--white);
`;

const tabBtn = css`
  width: 180px;
  height: 45px;
  margin-bottom: 0;
  background: var(--white);
  color: var(--primary);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  &:nth-child(2) {
    background: var(--primary);
    color: var(--white);
  }
`;

const inputbtndiv = css`
  > button {
    background: var(--primary);
    color: var(--white);
  }

  & :first-child {
    background: var(--red);
  }
`;

export { titlebtn, entrybtn, tabBtn, inputbtndiv };
