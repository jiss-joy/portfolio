"use client";

import React from "react";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div>
      <motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="180"
            stroke="#ED6A5A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              rotate: [180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              velocity: 40,
              repeatDelay: 0,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="172"
            stroke="#ED6A5A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 4 18 10" }}
            animate={{
              rotate: [60, 120],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              velocity: 80,
              repeatDelay: 0,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          <div>Photo</div>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
