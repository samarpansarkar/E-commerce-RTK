import { Link, Outlet } from 'react-router-dom'
import { NAV_LINK, TEXT } from '../constants/Constants'
import ToggleButton from './ToggleButton'
import { useState } from 'react';
import Button from './UI/Button';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${theme === "dark"
                ? "bg-gray-950 text-gray-100"
                : "bg-gray-50 text-gray-900"
                }`}
        >
            <section
                className={`flex justify-between px-20 py-5 transition-colors duration-500 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                    }`}
            >
                <Link to="/" className="text-xl font-bold text-amber-600">
                    {TEXT.APP_HEADING}
                </Link>

                <nav className="flex gap-x-8 font-semibold justify-center items-center">
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
                <Link to="/cart" className='bg-amber-600 flex justify-center items-center py-2 px-4 rounded-md hover:bg-amber-500 hover:scale-105 duration-300 cursor-pointer '><ShoppingCart /></Link>
            </section>
            <div className="px-20 py-10">
                <Outlet context={{ theme }} />
            </div>
        </div>
    )
}

export default Navbar