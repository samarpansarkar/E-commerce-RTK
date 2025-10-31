import { useOutletContext } from "react-router-dom"

const Button = ({ title, onClick }) => {
    const { theme } = useOutletContext()
    return (
        <button
            onClick={onClick}
            className={`h-14 px-4 w-[200px] rounded-md hover:scale-105 duration-300 font-semibold ${theme === "dark" ? "bg-amber-400 text-slate-700" : "bg-slate-500 text-white"}`}>
            {title}
        </button>
    )
}

export default Button