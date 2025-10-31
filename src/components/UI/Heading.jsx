import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Heading = ({ first_txt, second_txt, description }) => {
    const { theme } = useOutletContext()
    return (
        <div className={` w-full text-center mb-4 py-2 ${theme === "dark" ? "bg-gray-900" : "bg-slate-0"}`}>
            <h1 className={`text-4xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {first_txt || "Heading 1"}{" "}
                <span className={theme === "dark" ? "text-amber-400" : "text-amber-600"}>
                    {second_txt || "Heading 2"}
                </span>
            </h1>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                {description}
            </p>
        </div>
    )
}

export default Heading