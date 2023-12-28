import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { titlebtn } from "./btn";
import { center, column, flex, row } from "./flexstyle";
import { formcss, inputwindowcss } from "./formstyle";
export function GeneralInfoInput({ updateInfo, info }) {
  const handleChange = (e) => {
    updateInfo(e.target.id, e.target.value);
  };
  const [displayGeneral, setDisplayGeneral] = useState(false);
  function toggleGeneral() {
    setDisplayGeneral((state) => {
      return !state;
    });
  }
  return (
    <div>
      <button css={titlebtn} onClick={toggleGeneral}>
        <h3>General Info</h3>
      </button>
      {displayGeneral && (
        <div css={inputwindowcss}>
          <form>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Full Name..."
              onChange={handleChange}
              defaultValue={info.name || null}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email..."
              onChange={handleChange}
              defaultValue={info.email || null}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number..."
              onChange={handleChange}
              defaultValue={info.phone || null}
            />
          </form>
        </div>
      )}
    </div>
  );
}
