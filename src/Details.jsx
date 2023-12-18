import { Entry } from "./Entry";

function Details({ data, title }) {
  if (Object.keys(data).length > 0) {
    return (
      <div>
        <h3>{title}</h3>
        {Object.keys(data).map((item) => {
          return <Entry key={item} source={data[item]} />;
        })}
      </div>
    );
  }
}

export default Details;
