import { v4 as uuid } from "uuid";
const schoolID = uuid();
const workID = uuid();
const example = {
  info: {
    name: "Sarah Goode",
    email: "sarahgoode@example.com ",
    phone: "555-555-0000",
  },
  edu: {
    [schoolID]: {
      place: "State College of Florida",
      title: "General Education",
      start: "July 2018",
      end: "Jan 2020",
      location: "Florida, US",
    },
  },
  prof: {
    [workID]: {
      place: "Safran Power",
      title: "Logistic Coordinator",
      details:
        "Responsible for all warehouse related task; from managing inventory, to all dispatch related activities, such as picking, packing, shipping for both domestic and international customers.",
      start: "Jun 2015",
      end: "Present",
      location: "Florida, US",
    },
  },
};
export default example;
