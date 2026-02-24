import { FaBars, FaFacebook, FaFacebookF, FaInstagram, FaRegTimesCircle, FaSearch, FaTimes, FaTwitter, FaYoutube } from "react-icons/fa";
import { UserCircleIcon } from '@heroicons/react/24/outline'
import tcp_logo from "./assets/tcp_banner.png";
import { useState } from "react";

function Header() {
    const hoverText = "hover:text-[#9c3466] transition duration-300 cursor-pointer"
    const dropDown = "absolute p-5 top-15 border-[0.01rem] border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-300 delay-100 flex flex-col w-44 gap-2 font-medium bg-white"
    const iconStyles = "hover:text-red-800 transition duration-300 cursor-pointer"
    const hamHoverText = "hover:text-[#dab3c6] w-fit cursor-pointer transition duration-500 ease-in-out"
    const hamIconStyles = "mt-2 border-[#b5688d] border rounded-full items-center flex w-fit h-fit p-3 hover:bg-white hover:text-[#9c3466] cursor-pointer"

    const [hamIsClicked, setHamIsClicked] = useState(false)
    const [cartIsClicked, setCartIsClicked] = useState(false)

    function handleMenuClick() {
        setHamIsClicked(!hamIsClicked)
    }

    function handleCartClick() {
        setCartIsClicked(!cartIsClicked)
    }

    return (
        <nav>
            <div id="top-container" className="mt-12 ml-30 flex gap-6">
                <div id="icon-container" className="flex gap-5">
                    {hamIsClicked ? <FaTimes size={20} className={iconStyles}/> : <FaBars size={20} className={iconStyles} onClick={handleMenuClick} />}
                    <p className="relative -top-1  h-7 w-px bg-gray-300"></p>
                    <FaSearch size={20} className={iconStyles} />
                </div>
                <div onClick={handleMenuClick} className={`fixed inset-0 bg-black/40 z-40 ${hamIsClicked ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-500 ease-in-out`} />
                <div className={`fixed top-0 left-0 h-full w-95 bg-[#9c3466] transform transition-all duration-500 ease-in-out z-50 ${hamIsClicked ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                    <div className={`mt-10 mx-10 flex flex-col gap-4 text-white`}>
                        <FaTimes size={30} className={`hover:opacity-70  transition duration-300 cursor-pointer ml-auto `} onClick={handleMenuClick} />
                        <ul className="flex flex-col gap-4.5 text-xl font-serif">
                            <li className="text-[#dab3c6]">Home</li>
                            <li className={hamHoverText}>Articles</li>
                            <li className={hamHoverText}>Podcast</li>
                            <li className={hamHoverText}>Videos</li>
                            <li className={hamHoverText}>Bookstore</li>
                        </ul>
                        <div className="mt-10 flex flex-col gap-4">
                            <p className="font-semibold text-xs tracking-widest">MORE</p>
                            <p className={`text-lg font-serif ${hamHoverText}`}>My Account</p>
                            <p className={`text-lg font-serif ${hamHoverText}`}>Cart</p>
                        </div>
                        <p className="font-semibold text-xs tracking-widest mt-9.5">SOCIAL MEDIA</p>
                        <div id="ham-icon-container" className="flex gap-2">
                            <span className={hamIconStyles}><FaFacebookF size={20} /></span>
                            <span className={hamIconStyles}><FaTwitter size={20} /></span>
                            <span className={hamIconStyles}><FaYoutube size={20} /></span>
                            <span className={hamIconStyles}><FaInstagram size={20} /></span>
                        </div>
                    </div>
                </div>

                <div onClick={handleCartClick} className={`fixed inset-0 bg-black/40 z-40 ${cartIsClicked ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-500 ease-in-out`} />
                <div className={`fixed top-0 left-0 h-full w-88 bg-white transform transition-transform duration-500 ease-in-out z-50 ${cartIsClicked ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className={`mt-4 mx-7 flex flex-col gap-4 text-[#68717c]`}>
                        <FaTimes size={30} className={`transition duration-300 cursor-pointer ml-auto `} onClick={handleCartClick} />
                        <p className="text-[#454545]">No products in the cart.</p>
                    </div>
                </div>
                <a href="#" className="w-lg -mt-10 ml-70"><img src={tcp_logo} alt="tcp_logo" className=" " /></a>
                <span className="ml-20 text-gray-500 border-gray-500 border pl-3 -mt-2 pr-3 pt-2 mb-4 cursor-pointer" onClick={handleCartClick}>₹0.00 🛒</span>
                <UserCircleIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
            <div id="links-container" className="flex gap-8 justify-center mt-6 font-semibold text-sm tracking-widest ">
                <div className="text-[#9c3466] cursor-pointer"><a href="#">HOME</a></div>
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