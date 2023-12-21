import { useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import example from "./example";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const maincss = css`
  display: flex;
  flex-direction: row;
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
        setedu={setedu}
        setprof={setprof}
      />
      <Preview info={info} edu={edu} prof={prof} />
    </main>
  );
}

export default App;
