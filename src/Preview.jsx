import { GeneralInfo } from "./GeneralInfo";
import Details from "./Details";
function Preview({ info, edu, prof }) {
  return (
    <section>
      <h2 className="hidden">Preview</h2>
      <GeneralInfo info={info} />
      <Details data={edu} title="Education" />
      <Details data={prof} title="Professional Experience" />
    </section>
  );
}

export default Preview;
