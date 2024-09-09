type ACMEvent = {
  name: string;
  description: string;
  date?: string;
  time?: string;
  location?: string;
};

// This is to be updated until we have a backend to pull this data from
const events: ACMEvent[] = [
  { name: "Git Bash", description: "POV: cs majors learn how to socialize!" },
  { name: "Hackathon", description: "Join us for a 24-hour hackathon!" },
  {
    name: "Interview Prep",
    description: "Get ready for technical interviews!",
  },
  {
    name: "Web Dev Workshop",
    description: "Learn how to make a website from scratch!",
  },
  { name: "Research Workshop", description: "Learn how to conduct research!" },
  {
    name: "ICPC Practice",
    description:
      "Practice for the International Collegiate Programming Contest!",
  },
];

export default events;
