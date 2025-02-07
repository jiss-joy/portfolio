import React from "react";

const education = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "M.S. Ramaiah University of Applied Sciences",
    date: "May 2022 - Present",
  },
  {
    title: "High School",
    institution: "Devamatha CMI Public School",
    date: "2004 - 2017",
  },
];

const Education = () => {
  return (
    <section>
      <h3 className="h3">Academic Qualifications</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-2 space-x-2">
        {education.map((edu) => (
          <div
            key={edu.title}
            className="border border-white/20 rounded-xl p-4"
          >
            <h4 className="h4">{edu.title}</h4>
            <p>{edu.institution}</p>
            <p className="text-white/80">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
