export function GeneralInfoInput({ updateInfo }) {
  const handleChange = (e) => {
    updateInfo(e.target.id, e.target.value);
  };
  return (
    <div>
      <h3>General Info</h3>
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
    </div>
  );
}
