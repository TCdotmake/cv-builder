import { GeneralInfoInput } from "./GeneralInfoInput";

import { useState } from "react";

function InfoInputForm({ title, uid, data, handlers }) {
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
  const source = data[uid];
  console.log(source);
  return (
    <div>
      <form>
        <label htmlFor={place}>{place}</label>
        <input
          type="text"
          id={place}
          placeholder={ph1}
          defaultValue={source.place || null}
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
        <button onClick={handlers.delete}>Delete</button>
        <button onClick={handlers.cancel}>Cancel</button>
        <button onClick={handlers.save}>Save</button>
      </form>
    </div>
  );
}

function EditBtn({ source, evHandler, uid }) {
  return (
    <button onClick={evHandler} data-uid={uid}>
      {source.place}
    </button>
  );
}

function OtherInfoInput({ title, data, setter }) {
  const [displayBtn, setDisplayBtn] = useState(false);
  function toggleBtnDisplay() {
    setDisplayBtn((state) => {
      return !state;
    });
  }
  const [displayInput, setDisplayInput] = useState(false);
  const [currentUid, setCurrentUid] = useState(null);
  function handleEdit(e) {
    setCurrentUid(e.target.dataset.uid);
    setDisplayBtn(false);
    setDisplayInput(true);
  }
  const formHandlers = {
    cancel() {
      setDisplayInput(false);
      setDisplayBtn(true);
    },
    delete() {
      setter((prev) => {
        const newState = { ...prev };
        delete newState[currentUid];
        return newState;
      });
      setDisplayInput(false);
      setDisplayBtn(true);
    },
    save(e) {
      const parent = e.target.parentNode;
      const inputs = parent.querySelectorAll("input");
      const newEntry = {
        place: inputs[0].value,
        title: inputs[1].value,
        start: inputs[2].value,
        end: inputs[3].value,
        location: inputs[4].value,
      };
      const details = parent.querySelector("textarea");
      if (details) {
        newEntry.details = details.value;
      }
      setter((prev) => {
        const newState = { ...prev };
        newState[currentUid] = { ...newEntry };
        return newState;
      });
      setDisplayInput(false);
      setDisplayBtn(true);
    },
  };
  return (
    <div>
      <button onClick={toggleBtnDisplay}>
        <h3>{title}</h3>
      </button>
      {displayBtn &&
        Object.keys(data).length > 0 &&
        Object.keys(data).map((item) => {
          return (
            <EditBtn
              key={item + "btn"}
              uid={item}
              source={data[item]}
              evHandler={handleEdit}
            />
          );
        })}
      {displayInput && (
        <InfoInputForm
          title={title}
          uid={currentUid}
          data={data}
          handlers={formHandlers}
        />
      )}
    </div>
  );
}

function Builder({ updateInfo, edu, prof, setedu, setprof }) {
  return (
    <section>
      <h2 className="hidden">CV Builder Input</h2>
      <GeneralInfoInput updateInfo={updateInfo} />
      <OtherInfoInput title="Education" data={edu} setter={setedu} />
      <OtherInfoInput
        title="Professional Experience"
        data={prof}
        setter={setprof}
      />
    </section>
  );
}

export default Builder;
