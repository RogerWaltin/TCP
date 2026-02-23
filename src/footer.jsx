import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const hamIconStyles = "mt-2 border-[#dfdfdf] hover:border-[#9c3466] border rounded-full items-center flex w-fit h-fit p-3 text-[#9c3466] hover:bg-[#9c3466] hover:text-white cursor-pointer transition duration-200"

    return (
        <div>
            <footer>
                <hr className="mb-4 mx-0 text-gray-200" />
                <div id="listdiv" className="mx-35 my-6 flex gap-7 py-10">
                    <ul className="list border-r pr-7 border-gray-300 whitespace-nowrap">
                        <li className="font-semibold text-lg uppercase">Pages</li>
                        <hr className="mt-2 w-10 border-2 text-[#9c3466]" />
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Home</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">About Us</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Privacy Policy</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Refund & Cancellation Policy</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Shipping & Delivery Policy</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Terms & Conditions</a>
                        </li>
                    </ul>
                    <ul className="list border-r pr-17 border-gray-300 whitespace-nowrap">
                        <li className="font-semibold text-lg uppercase">Other Links</li>
                        <hr className="mt-2 w-10 border-2 text-[#9c3466]" />
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Redemption Hill Church</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Mike's Personal Blog</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">TCP YouTube Channel</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">For The Truth</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Sola Books</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Equip Indian Churches</a>
                        </li>
                    </ul>
                    <ul className="list border-r pr-21 border-gray-300 whitespace-nowrap">
                        <li className="font-semibold text-lg uppercase">Authors</li>
                        <hr className="mt-2 w-10 border-2 text-[#9c3466]" />
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Michael Teddy</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Benjamin Abraham</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Ashok Mohanakumar</a>
                        </li>
                        <li className="pt-5">
                            <a href="#" className="hover:text-[#9c3466]">Steve Waltin</a>
                        </li>
                    </ul>
                    <div className="list ">
                        <div className="pt-4"><a href="https://thecrosspurpose.com"><img src="https://thecrosspurpose.com/wp-content/uploads/2022/09/logo-1.png" alt="logo" className="w-lg" /></a></div>
                        <div className="pt-5 mb-10.5">Informing Minds. Reforming Hearts.</div>
                        <div id="ham-icon-container" className="flex gap-2">
                            <span className={hamIconStyles}><FaFacebookF size={18} /></span>
                            <span className={hamIconStyles}><FaInstagram size={20} /></span>
                            <span className={hamIconStyles}><FaYoutube size={20} /></span>
                            <span className={hamIconStyles}><FaTwitter size={20} /></span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#dfdfdf] py-6.5">
                    <p className="mx-32 text-[#8e8e8e] font-sans"><span className="hover:text-[#9c3466]">The Cross Purpose</span> © 2022 - All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}