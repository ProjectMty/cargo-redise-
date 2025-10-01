"use client";
import { motion } from "framer-motion";
import React,{ useState } from "react";

interface PlaceholderAnimateProps {
  id: string;
  label: string;
  ingreso?: string;
}

const PlaceholderAnimate: React.FC<PlaceholderAnimateProps> = ({ id, label, ingreso = "0"}) => {
    const [value, setValue] = useState("");

    return (
        <motion.label
        htmlFor={id}
         className="absolute text-gray-500 pointer-events-none"
        animate={{
          x: value.length > 0 ? 96 : 12,
          color: value.length > 0 ? "#6B7280" : "#9CA3AF",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {label}
        </motion.label>
    )
};


export default PlaceholderAnimate;