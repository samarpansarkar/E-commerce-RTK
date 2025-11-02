import React from 'react'
import { CATEGORY_SELECT_OPTIONS } from '../../constants/Constants'
import { useOutletContext } from 'react-router-dom'

const SelectOption = ({ state, setState }) => {
    const { theme } = useOutletContext();
    return (
        <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={`w-full sm:w-64 px-4 py-2.5 rounded-xl border-2 focus:outline-none transition-all duration-300 shadow-sm
      ${theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white placeholder-amber-400 focus:border-amber-600"
                    : "bg-white border-gray-300 text-gray-800 placeholder-amber-500 focus:border-blue-500"
                }`}
        >
            <option value="">All Categories</option>
            {CATEGORY_SELECT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className={`capitalize ${theme === "dark" ? "bg-gray-800 text-white focus:bg-amber-600" : "bg-white text-gray-800"}`}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default SelectOption