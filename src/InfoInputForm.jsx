/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { formcss, inputwindowcss } from "./formstyle";
import { inputbtndiv } from "./btn";

export function InfoInputForm({ title, uid, data, handlers }) {
  let prefix = "";
  let place = "School";
  let position = "Degree";
  let ph1 = "Enter school/university";
  let ph2 = "Enter degree/field of study";

  //prop switch for section type
  if (title === "Education") {
    prefix = "edu-";
  } else if (title === "Professional Experience") {
    prefix = "prof-";
    place = "Company";
    position = "Position";
    ph1 = "Enter company name";
    ph2 = "Enter title/position";
  }
  //END prop switch for section type
  const source = data[uid] || {};

  return (
    <div css={inputwindowcss}>
      <form>
        <label htmlFor={place}>{place}</label>
        <input
          type="text"
          id={place}
          placeholder={ph1}
          defaultValue={source.place || ""}
        ></input>
        <label htmlFor={position}>{position}</label>
        <input
          type="text"
          id={position}
          placeholder={ph2}
          defaultValue={source.title || null}
        ></input>
        <label htmlFor={`${prefix}start-date`}>Start Date</label>
        <input
          type="text"
          id={`${prefix}start-date`}
          placeholder="Enter start date"
          defaultValue={source.start || null}
        />
        <label htmlFor={`${prefix}end-date`}>End Date</label>
        <input
          type="text"
          id={`${prefix}end-date`}
          placeholder="Enter end date"
          defaultValue={source.end || null}
        />
        <label htmlFor={prefix + "location"}>Location</label>
        <input
          type="text"
          id={prefix + "location"}
          placeholder="Enter location"
          defaultValue={source.location || null}
        />
        {prefix === "prof-" && (
          <>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter description"
              defaultValue={source.details || null}
            />
          </>
        )}
        <div css={inputbtndiv}>
          <button onClick={handlers.delete}>Delete</button>
          <button onClick={handlers.cancel}>Cancel</button>
          <button onClick={handlers.save}>Save</button>
        </div>
      </form>
    </div>
  );
}
