import React from 'react'

const Input = ({ name, type, value, placeholder, onChange }) => {
    return (
        <div className="w-60 h-12 relative flex rounded-xl mb-2 md:mb-0">
            <input type={type} value={value} id={name} onChange={onChange} name={name} required className="peer border border-gray-400 rounded px-3 pt-4 pb-2 w-full focus:outline-none focus:border-blue-600" />
            <label htmlFor={name} className="absolute left-4 top-1/2 translate-y-[-50%]  px-2 font-light text-base text-gray-500
           transition-all duration-150
           peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-slate-100
           peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-slate-600">{placeholder}</label>
        </div>
    )
}

export default Input