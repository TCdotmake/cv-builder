import { v4 as uuid } from "uuid";
import { useState } from "react";
import { InfoInputForm } from "./InfoInputForm";

export function OtherInfoInput({ title, data, setter }) {
  //btn for adding/editing entries
  function EditBtn({ source, evHandler, uid }) {
    return (
      <button onClick={evHandler} data-uid={uid}>
        {source.place}
      </button>
    );
  }
  function AddBtn({ handler }) {
    return <button onClick={handler}>Add...</button>;
  }
  //END btn for adding/editing entries
  //switches for button view and input view
  const [displayBtn, setDisplayBtn] = useState(false);
  function toggleBtnDisplay() {
    setDisplayBtn((state) => {
      return !state;
    });
  }
  const [displayInput, setDisplayInput] = useState(false);
  const [currentUid, setCurrentUid] = useState(null);

  function btnView() {
    setDisplayInput(false);
    setDisplayBtn(true);
  }
  function inputView() {
    setDisplayBtn(false);
    setDisplayInput(true);
  }
  //END switches for button view and input view
  //event handlers
  function handleEdit(e) {
    setCurrentUid(e.target.dataset.uid);
    inputView();
  }
  function handleAdd() {
    setCurrentUid(uuid());
    inputView();
  }
  const formHandlers = {
    cancel() {
      btnView();
    },
    delete() {
      setter((prev) => {
        const newState = { ...prev };
        delete newState[currentUid];
        return newState;
      });
      btnView();
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
      btnView();
    },
  };
  //END event handlers
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
      {displayBtn && <AddBtn handler={handleAdd} />}
    </div>
  );
}
