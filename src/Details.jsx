import { Entry } from "./Entry";

function Details({ data, title }) {
  if (Object.keys(data).length > 0) {
    const schools = [];
    for (const [uid, source] of Object.entries(data)) {
      schools.push([uid, source]);
    }

    return (
      <div>
        <h3>{title}</h3>
        {schools.map((source) => {
          return <Entry key={source[0]} source={source[1]} />;
        })}
      </div>
    );
  }
}

export default Details;
