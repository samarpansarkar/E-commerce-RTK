import React from 'react'

const ErrorPage = ({ message }) => {
    //     const { theme } = useOutletContext()  //!${ theme === "dark" ? "bg-red-800 text-white" : "bg-red-100 text-red-800"
    // }

    return (
        <div className={`p-4 rounded-md `}>
            <h1>Error: {message}</h1>
            <p>Please try again later.</p>

        </div>
    )
}

export default ErrorPage