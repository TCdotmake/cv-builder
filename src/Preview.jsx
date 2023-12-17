import { Education } from "./Education";

function GeneralInfo({ info }) {
  return (
    <div>
      <h3 className="hidden">General Info</h3>
      <p>{info.name}</p>
      <p>{info.email}</p>
      <p>{info.phone}</p>
    </div>
  );
}

function Preview({ info, edu }) {
  return (
    <section>
      <h2 className="hidden">Preview</h2>
      <GeneralInfo info={info} />
      <Education edu={edu} />
    </section>
  );
}

export default Preview;
