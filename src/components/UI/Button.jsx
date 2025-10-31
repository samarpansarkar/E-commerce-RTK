import React from "react";
import { useOutletContext } from "react-router-dom";

const Button = ({ title, onClick, type = "button", className = "" }) => {
    const { theme } = useOutletContext()
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        w-full rounded-xl px-4 py-2 font-semibold transition-all duration-300 
        shadow-md active:scale-95
        ${theme === "light"
                    ? "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600"
                    : "bg-amber-500 text-gray-900 hover:bg-amber-400 active:bg-amber-600"}

        ${className}
      `}
        >
            {title}
        </button>
    );
};

export default Button;


