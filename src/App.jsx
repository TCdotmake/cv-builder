import { useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import example from "./example";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex, row } from "./flexstyle";
import { screen400 } from "./responsive";

const maincss = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 1rem 0;
  > * {
    border-radius: 5px;
  }
  @media screen and (min-width: 951px) {
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: 360px 360px;
  }
  @media screen and (max-width: 500px) {
    ${flex}
    ${column}
    ${center}
  }
`;

function App() {
  const [info, setinfo] = useState({ ...example.info });

  function updateInfo(key, value) {
    setinfo({ ...info, [key]: value });
  }

  const [edu, setedu] = useState({ ...example.edu });
  const [prof, setprof] = useState({ ...example.prof });
  return (
    <main css={maincss}>
      <Builder
        updateInfo={updateInfo}
        edu={edu}
        prof={prof}
        info={info}
        setedu={setedu}
        setprof={setprof}
      />
      <Preview info={info} edu={edu} prof={prof} />
    </main>
  );
}

export default App;
