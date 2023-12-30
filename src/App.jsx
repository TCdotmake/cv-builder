import { useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import example from "./example";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { center, column, flex, row } from "./flexstyle";
import { tabBtn } from "./btn";
import logo from "./github-mark.png";
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
  ${flex}
  ${row}
  ${center}
  justify-content: flex-end;
  padding: 0 3%;
  gap: 0.5rem;
  > h1 {
    color: var(--red);
    font-size: 1.5rem;
  }
`;

const linkcss = css`
  width: 40px;
  height: 40px;
  > * {
    width: 40px;
    height: 40px;
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
    <>
      <header css={headercss}>
        <h1>CV Builder</h1>
        <a
          css={(flex, row, center)}
          href="https://github.com/TCdotmake/cv-builder"
          target="_blank"
        >
          <img
            css={css`
              height: 30px;
              width: 30px;
            `}
            src={logo}
            alt="GitHub Logo"
          />
        </a>
      </header>
      <main css={maincss}>
        {tabs && (
          <div>
            <button css={tabBtn} onClick={builderView}>
              <h3>Builder</h3>
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
