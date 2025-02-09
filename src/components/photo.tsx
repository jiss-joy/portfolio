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
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              rotate: [180, 90],
              skewX: ["20deg"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              velocity: 40,
              repeatDelay: 0,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="170"
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 18 0 0" }}
            animate={{
              rotate: [180, 60],
              skewX: ["25deg"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              velocity: 0.5,
              repeatDelay: 0,
              repeatType: "reverse",
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
