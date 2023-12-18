import { useState } from "react";

export function GeneralInfoInput({ updateInfo }) {
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
      <button onClick={toggleGeneral}>
        <h3>General Info</h3>
      </button>
      {displayGeneral && (
        <form>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Full Name..."
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email..."
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter Phone Number..."
            onChange={handleChange}
          />
        </form>
      )}
    </div>
  );
}
