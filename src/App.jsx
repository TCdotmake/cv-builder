import { useState } from "react";
import "./App.css";
import Preview from "./Preview";
import Builder from "./Builder";
import { v4 as uuid } from "uuid";

import example from "./example";

function App() {
  const [info, setinfo] = useState({ ...example.info });

  function updateInfo(key, value) {
    setinfo({ ...info, [key]: value });
  }

  const [edu, setedu] = useState({ ...example.edu });

  return (
    <main>
      <Builder updateInfo={updateInfo} />
      <Preview info={info} edu={edu} />
    </main>
  );
}

export default App;
