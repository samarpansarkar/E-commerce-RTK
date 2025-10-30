import { Moon, Sun } from "lucide-react";

const ToggleButton = ({ theme, setTheme }) => {
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
        >
            {theme === "dark" ? (
                <Sun className="text-yellow-400" size={20} />
            ) : (
                <Moon className="text-gray-800" size={20} />
            )}
        </button>
    )
}

export default ToggleButton