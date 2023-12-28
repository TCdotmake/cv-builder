import { v4 as uuid } from "uuid";
const schoolID = uuid();
const schoolID2 = uuid();
const workID = uuid();
const workID2 = uuid();
const example = {
  info: {
    name: "John Smith",
    email: "johnsmith@email.com ",
    phone: "555-555-0000",
  },
  edu: {
    [schoolID]: {
      place: "Riverside University",
      title: "Bachelor's in computer science",
      start: "July 2018",
      end: "Jan 2020",
    },
    [schoolID2]: {
      place: "Lakeview Community College",
      title: "General Education",
      start: "2016",
      end: "2018",
    },
  },
  prof: {
    [workID]: {
      place: "BlueNet Technology Group",
      title: "Java Developer",
      details:
        "Participate in lifecycle development for web application. Troubleshoot website codes to identify and correct errors. Collaborate with customers to identify project needs and technical concerns.",
      start: "Jun 2021",
      end: "Present",
      location: "Somewhere, US",
    },
    [workID2]: {
      place: "Windell Design Work",
      title: "UX Designer",
      details:
        "Designed product packaging, created online campaigns, and worked on UI development for web/mobile.",
      start: "2019",
      end: "Jun 2021",
      location: "Somwhere, US",
    },
  },
};
export default example;
