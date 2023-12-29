import { css } from "@emotion/react";

const titlebtn = css`
  width: 300px;
  margin-top: 20px;
`;

const entrybtn = css`
  width: 250px;
  margin-top: 10px;
`;

const tabBtn = css`
  width: 180px;
  margin-bottom: 0;
  background: #7b7e88;
  color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const selectedTab = css`
  width: 180px;
  margin-bottom: 0;
  color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: var(--primary);
`;

export { titlebtn, entrybtn, tabBtn, selectedTab };
