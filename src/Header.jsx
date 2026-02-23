import { FaBars, FaRegTimesCircle, FaSearch, FaTimes } from "react-icons/fa";
import { UserCircleIcon } from '@heroicons/react/24/outline'
import clsx from "clsx";
import tcp_logo from "./assets/tcp_banner.png";
import { useState } from "react";

function Header() {
    //make the hamburger menus later

    const hoverText = "hover:text-[#9c3466] transition duration-300 hover:cursor-pointer"
    const dropDown = "absolute rounded-lg p-3 mt-10 border-2 shadow-md scale-y-0 group-hover:scale-y-100 origin-top duration-300 delay-100 flex flex-col w-44 gap-2 font-medium bg-white"
    const iconStyles = "hover:text-red-800 transition duration-300 hover:cursor-pointer"

    const [hamIsClicked, setHamIsClicked] = useState(false)

    function handleMenuClick() {
        setHamIsClicked(!hamIsClicked)
    }

    return (
        <nav>
            <div id="top-container" className="mt-12 ml-30 flex gap-6">
                <div id="icon-container" className="flex gap-5">
                    {hamIsClicked ? <FaTimes size={20} className={iconStyles} onClick={handleMenuClick} /> : <FaBars size={20} className={iconStyles} onClick={handleMenuClick} />}
                    <p className="relative -top-1  h-7 w-px bg-gray-300"></p>
                    <FaSearch size={20} className={iconStyles} />
                </div>
                {hamIsClicked && (<div onClick={handleMenuClick} className="fixed inset-0 bg-black/40 z-40"/>)}
                <div className={`fixed top-0 left-0 h-full w-95 bg-[#9c3466] transform transition-transform duration-300 ease-in-out z-50 ${hamIsClicked ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className={`mt-10 mx-10`}>
                        <FaTimes size={30} className={`hover:opacity-70  transition duration-300 hover:cursor-pointer ml-auto text-white`} onClick={handleMenuClick} />
                    </div>
                </div>
                <a href="#" className="w-lg -mt-10 ml-70"><img src={tcp_logo} alt="tcp_logo" className=" " /></a>
                <span className="ml-20 text-gray-500 border-gray-500 border pl-3 -mt-2 pr-3 pt-2 mb-4 ">₹0.00 🛒</span>
                <UserCircleIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div id="links-container" className="flex gap-8 justify-center mt-6 font-semibold text-sm tracking-widest ">
                <div className="text-[#9c3466] hover:cursor-pointer"><a href="#">HOME</a></div>
                <div className="group relative" >
                    <a href="#" className={hoverText}>ARTICLES</a>
                    <div className={dropDown}>
                        <a href="#" className={hoverText}>Reviews</a>
                    </div>
                </div>
                <div className="group relative" >
                    <a href="#" className={hoverText}>PODCAST</a>
                    <div className={dropDown}>
                        <a href="#" className={hoverText}>The Show</a>
                        <a href="#" className={hoverText}>Brook Kidron</a>
                    </div>
                </div>
                <div className="group relative" >
                    <a href="#" className={hoverText}>VIDEOS</a>
                    <div className={dropDown}>
                        <a href="#" className={hoverText}>What About?</a>
                        <a href="#" className={hoverText}>Sermons</a>
                        <a href="#" className={hoverText}>Other</a>
                    </div>
                </div>
                <div className={hoverText}><a href="#">BOOKSTORE</a></div>
            </div>
            <hr className="mt-10 text-gray-200" />
        </nav>
    )
}

export default Header