import { TimeLocation } from "./TimeLocation";

function EducationDetails({ source }) {
  return (
    <div>
      <h4 className="hidden">Education Details</h4>
      {source.school && <h5>{source.school}</h5>}
      {source.degree && <p>{source.degree}</p>}
    </div>
  );
}
function School({ source }) {
  return (
    <div>
      <TimeLocation source={source} />
      <EducationDetails source={source} />
    </div>
  );
}
export function Education({ edu }) {
  if (Object.keys(edu).length > 0) {
    const schools = [];
    for (const [uid, source] of Object.entries(edu)) {
      schools.push([uid, source]);
    }

    return (
      <div>
        <h3>Education</h3>
        {schools.map((source) => {
          return <School key={source[0]} source={source[1]} />;
        })}
      </div>
    );
  }
}
