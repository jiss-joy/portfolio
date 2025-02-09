"use client";

import { TypeAnimation } from "react-type-animation";

const DELAY = 1000;
const TYPE_SPEED = 50;

const RolesTypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "I'm a Frontend Developer.",
        DELAY,
        "I'm a Backend Developer.",
        DELAY,
        "I'm a Full-stack Developer.",
        DELAY,
      ]}
      wrapper="strong"
      speed={TYPE_SPEED}
      className="inline-block text-lg lg:text-2xl font-code"
      repeat={Infinity}
    />
  );
};

export default RolesTypingText;
