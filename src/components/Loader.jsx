import React from 'react'

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <div className="flex flex-col items-center space-y-3">
                <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-yellow-600 text-sm font-medium">Loading...</p>
            </div>
        </div>
    );
}

export default Loader