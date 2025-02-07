import React from "react";

const experience = [
  {
    title: "Fullstack Developer",
    company: "Canbright Co. Ltd.",
    date: "May 2022 - Present",
    description: "Designed and developed both frontend and backend features.",
  },
  {
    title: "Software Developer Trainee",
    company: "Canbright Co. Ltd.",
    date: "November 2021 - May 2022",
    description:
      "Designed and built an in-house scrum point estimation system, improving team sprint planning.",
  },
  {
    title: "Android Developer Intern",
    company: "Smartech Brain Technologies",
    date: "August 2020 - January 2021",
    description: "Description 1",
  },
];

const Experience = () => {
  return (
    <section>
      <h3 className="h3">Experience</h3>
      <p>My career journey until now.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-2 space-x-2">
        {experience.map((exp) => (
          <div
            key={exp.title}
            className="border border-white/20 rounded-xl p-4"
          >
            <h4 className="h4">{exp.title}</h4>
            <p>{exp.company}</p>
            <p className="text-white/80">{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
