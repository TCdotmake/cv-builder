import { GeneralInfoInput } from "./GeneralInfoInput";
import { OtherInfoInput } from "./OtherInfoInput";

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
