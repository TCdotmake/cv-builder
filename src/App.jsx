import { Fragment, useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import example from "./example";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex } from "./flexstyle";
import { tabBtn } from "./btn";

const maincss = css`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  justify-content: space-around;
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
    > *:nth-of-type(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

const headercss = css`
  width: 100%;
  height: 45px;
  background: var(--white);
  border-radius: 5px;
  margin: 1rem 0;
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
    <>
      <header css={headercss}>
        <a>github</a>
      </header>
      <main css={maincss}>
        {tabs && (
          <div>
            <button css={tabBtn} onClick={builderView}>
              <h3>CV Builder</h3>
            </button>
            <button css={tabBtn} onClick={previewView}>
              <h3>Preview</h3>
            </button>
          </div>
        )}

        {builder && (
          <Builder
            id="builder"
            updateInfo={updateInfo}
            edu={edu}
            prof={prof}
            info={info}
            setedu={setedu}
            setprof={setprof}
          />
        )}
        {preview && <Preview id="preview" info={info} edu={edu} prof={prof} />}
      </main>
    </>
  );
}

export default App;
