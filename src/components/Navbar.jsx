import { Link, Outlet } from "react-router-dom";
import { NAV_LINK, TEXT } from "../constants/Constants";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
    const [theme, setTheme] = useState("dark");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${theme === "dark"
                ? "bg-gray-950 text-gray-100"
                : "bg-gray-50 text-gray-900"
                }`}
        >
            <section
                className={`sticky top-0 z-50 flex justify-between items-center px-6 sm:px-10 md:px-20 py-4 transition-colors duration-500 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                    }`}
            >
                <Link to="/" className="text-xl font-bold text-amber-600">
                    {TEXT.APP_HEADING}
                </Link>
                <nav className="hidden md:flex gap-x-8 font-semibold justify-center items-center">
                    <ToggleButton theme={theme} setTheme={setTheme} />
                    {NAV_LINK.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="hover:text-amber-400 transition-colors"
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        to="/cart"
                        className="bg-amber-600 flex justify-center items-center py-2 px-3 rounded-md hover:bg-amber-500 hover:scale-105 duration-300 cursor-pointer"
                    >
                        <ShoppingCart />
                    </Link>
                    <div className="block md:hidden">
                        <ToggleButton theme={theme} setTheme={setTheme} />
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </section>
            {isMenuOpen && (
                <div
                    className={`md:hidden flex flex-col items-center gap-4 py-4 font-semibold transition-all duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                        }`}
                >
                    {NAV_LINK.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-amber-400 transition-colors"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            )}
            <div className="px-6 sm:px-10 md:px-20 py-10">
                <Outlet context={{ theme }} />
            </div>
        </div>
    );
};

export default Navbar;
