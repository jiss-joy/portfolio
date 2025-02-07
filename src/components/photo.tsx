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
            // style={{ skewX: "30deg" }}
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 12025 25", "16 25 92 72", "4 250 22 22"],
              rotate: [180, 60],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div>Photo</div>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
