import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Error = ({ message }) => {
    const { theme } = useOutletContext()

    return (
        <div className={`p-4 rounded-md ${theme === "dark" ? "bg-red-800 text-white" : "bg-red-100 text-red-800"}`}>
            <h1>Error: {message}</h1>
            <p>Please try again later.</p>

        </div>
    )
}

export default Error