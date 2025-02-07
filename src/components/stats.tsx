"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    label: "Experience",
    value: 3,
  },
  {
    label: "Projects Completed",
    value: 8,
  },
  {
    label: "Code commits",
    value: 300,
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.value}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-semibold"
                />
                <p
                  className={`${
                    item.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
