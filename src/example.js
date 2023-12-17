import { v4 as uuid } from "uuid";
const schoolID = uuid();
const example = {
  info: {
    name: "Sarah Goode",
    email: "sarahgoode@example.com ",
    phone: "555-555-0000",
  },
  edu: {
    [schoolID]: {
      school: "State College of Florida",
      degree: "General Education",
      start: "July 2018",
      end: "Jan 2020",
      location: "Florida, US",
    },
  },
};
export default example;
