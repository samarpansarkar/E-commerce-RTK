import React from "react";
import { useOutletContext } from "react-router-dom";

const Button = ({ title, onClick, type = "button", className = "", children }) => {
    const { theme } = useOutletContext()
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        w-full rounded-xl px-4 py-2 font-semibold transition-all duration-300 cursor-pointer  hover:scale-105
        shadow-md active:scale-95
        ${theme === "light"
                    ? "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600"
                    : "bg-amber-400 text-gray-900 hover:bg-amber-300 active:bg-amber-500"}

        ${className}
      `}
        >
            {children}
            {title}
        </button>
    );
};

export default Button;


