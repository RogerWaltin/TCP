import { FaBars, FaSearch } from "react-icons/fa";
import { UserCircleIcon } from '@heroicons/react/24/outline'
import tcp_logo from "./assets/tcp_banner.png";

function Header() {
    const hoverText = "hover:text-[#9c3466] transition duration-300 hover:cursor-pointer"

    return (
        <div>
            <div id="top-container" className="mt-12 ml-30 flex gap-6">
                <div id="icon-container" className="flex gap-5">
                    <FaBars size={20} className="hover:text-red-800 transition duration-300 hover:cursor-pointer " />
                    <p className="relative -top-1  h-7 w-px bg-gray-300"></p>
                    <FaSearch size={20} className="hover:text-red-800 transition duration-300 hover:cursor-pointer" />
                </div>
                <img src={tcp_logo} alt="tcp_logo" className="w-lg -mt-10 ml-70" />
                <span className="ml-20 text-gray-500 border-gray-500 border pl-3 -mt-2 pr-3 pt-2 mb-4 ">₹0.00 🛒</span>
                <UserCircleIcon className="h-6 w-6 text-gray-500" />
            </div>

            <ul id="links-container" className="flex gap-8 justify-center mt-6 font-semibold text-sm tracking-widest">
                <li className="text-[#9c3466] hover:cursor-pointer">HOME</li>
                <li className={hoverText}>ARTICLES</li>
                <li className={hoverText}>PODCAST</li>
                <li className={hoverText}>VIDEOS</li>
                <li className={hoverText}>BOOKSTORE</li>
            </ul>

            <hr className="mt-10 text-gray-200"/>

        </div>
    )
}

export default Header