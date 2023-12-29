import { useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import example from "./example";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex, row } from "./flexstyle";
import { screen400 } from "./responsive";
import { selectedTab, tabBtn } from "./btn";

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
  @media screen and (max-width: 739px) {
    ${flex}
    ${column}
    ${center}
    gap: 0;
    > *:nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

function App() {
  const [info, setinfo] = useState({ ...example.info });
  function updateInfo(key, value) {
    setinfo({ ...info, [key]: value });
  }
  const [edu, setedu] = useState({ ...example.edu });
  const [prof, setprof] = useState({ ...example.prof });
  const [builder, setBuilder] = useState(true);
  const [preview, setPreview] = useState(false);
  const [tabs, setTabs] = useState(true);

  function handleMobileView() {
    if (window.innerWidth < 740) {
      setTabs(true);
      setPreview(false);
    } else {
      setTabs(false);
      setPreview(true);
      setBuilder(true);
    }
  }

  const builderView = () => {
    setPreview(false);
    setBuilder(true);
  };
  const previewView = () => {
    setBuilder(false);
    setPreview(true);
  };

  window.addEventListener("load", () => {
    handleMobileView();
  });
  window.addEventListener("resize", () => {
    handleMobileView();
  });
  return (
    <main css={maincss}>
      {tabs && (
        <div>
          <button
            css={(builder && selectedTab) || tabBtn}
            onClick={builderView}
          >
            Builder
          </button>
          <button
            css={(preview && selectedTab) || tabBtn}
            onClick={previewView}
          >
            Preview
          </button>
        </div>
      )}

      {builder && (
        <Builder
          updateInfo={updateInfo}
          edu={edu}
          prof={prof}
          info={info}
          setedu={setedu}
          setprof={setprof}
        />
      )}
      {preview && <Preview info={info} edu={edu} prof={prof} />}
    </main>
  );
}

export default App;
