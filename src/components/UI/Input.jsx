import React from "react";

const Input = ({ name, type = "text", value, placeholder, onChange, theme }) => {
    const isDark = theme === "dark";

    return (
        <div className="relative w-full max-w-sm">
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required
                placeholder=" "
                className={`
          peer w-full rounded-lg border-2 bg-transparent px-4 pt-5 pb-2 text-sm font-medium outline-none transition-all duration-300
          ${isDark === "dark"
                        ? "border-gray-700 focus:border-amber-400 focus:shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                        : "border-gray-300 focus:border-amber-500 focus:shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                    }
          ${value ? "border-amber-500" : ""}
        `}
            />

            <label
                htmlFor={name}
                className={`
          absolute left-4 text-gray-500 text-sm transition-all duration-300
          ${value
                        ? "top-2 text-xs"
                        : "top-1/2 -translate-y-1/2 text-base text-gray-400"}
          peer-focus:top-2 peer-focus:text-xs
          ${isDark ? "peer-focus:text-amber-400" : "peer-focus:text-amber-500"}
        `}
            >
                {placeholder}
            </label>
        </div>
    );
};

export default Input;





