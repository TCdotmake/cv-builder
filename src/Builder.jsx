import { GeneralInfoInput } from "./GeneralInfoInput";

import { useState } from "react";

function InfoInputForm({ title }) {
  let prefix = "";
  let place = "School";
  let position = "Degree";
  let ph1 = "Enter school/university";
  let ph2 = "Enter degree/field of study";
  if (title === "Education") {
    prefix = "edu-";
  } else if (title === "Professional Experience") {
    prefix = "prof-";
    place = "Company";
    position = "Position";
    ph1 = "Enter company name";
    ph2 = "Enter title/position";
  }
  return (
    <div>
      <form>
        <label htmlFor={place}>{place}</label>
        <input type="text" id={place} placeholder={ph1}></input>
        <label htmlFor={position}>{position}</label>
        <input type="text" id={position} placeholder={ph2}></input>
        <label htmlFor={`${prefix}start-date`}>Start Date</label>
        <input
          type="text"
          id={`${prefix}start-date`}
          placeholder="Enter start date"
        />
        <label htmlFor={`${prefix}end-date`}>End Date</label>
        <input
          type="text"
          id={`${prefix}end-date`}
          placeholder="Enter end date"
        />
        <label htmlFor={prefix + "location"}>Location</label>
        <input
          type="text"
          id={prefix + "location"}
          placeholder="Enter location"
        />
        {prefix === "prof-" && (
          <>
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="Enter description" />
          </>
        )}
        <button>Delete</button>
        <button>Cancel</button>
        <button>Save</button>
      </form>
    </div>
  );
}

function EditBtn({ source }) {
  return <button>{source.place}</button>;
}

function OtherInfoInput({ title, data }) {
  const [displayBtn, setDisplayBtn] = useState(false);
  function toggleBtnDisplay() {
    setDisplayBtn((state) => {
      return !state;
    });
  }
  return (
    <div>
      <button onClick={toggleBtnDisplay}>
        <h3>{title}</h3>
      </button>
      {displayBtn &&
        Object.keys(data).length > 0 &&
        Object.keys(data).map((item) => {
          return <EditBtn key={item + "btn"} source={data[item]} />;
        })}
      <InfoInputForm title={title} />
    </div>
  );
}

function Builder({ updateInfo, edu, prof }) {
  return (
    <section>
      <h2 className="hidden">CV Builder Input</h2>
      <GeneralInfoInput updateInfo={updateInfo} />
      <OtherInfoInput title="Education" data={edu} />
      <OtherInfoInput title="Professional Experience" data={prof} />
    </section>
  );
}

export default Builder;
