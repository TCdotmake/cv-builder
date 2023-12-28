import { useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import example from "./example";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const maincss = css`
  display: grid;
  grid-template-columns: 1fr 2fr;

  padding: 1rem 0;
  > * {
    border-radius: 5px;
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
