import { useState } from "react";

export default function Footer() {


    return (
        <div>
            <footer>
                <hr className="mb-4 mx-0 text-gray-200" />
                <div id="listdiv" className="mx-35 my-6 flex gap-7 py-10">
                    <ul className="list border-r pr-7 border-gray-300 whitespace-nowrap">
                        <li className="font-bold text-xl">Pages</li>
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
                        <li className="font-bold text-xl">Other Links</li>
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
                        <li className="font-bold text-xl">Authors</li>
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
                    <ul className="list ">
                        <li className="pt-5"><a href="https://thecrosspurpose.com"><img src="https://thecrosspurpose.com/wp-content/uploads/2022/09/logo-1.png" alt="logo" className="w-lg" /></a></li>
                        <li className="pt-5">Informing Minds. Reforming Hearts.</li>
                        <ul className="flex gap-6 mt-12 select-none"> {/*remember to import icons instead later*/}
                            <li className="group rounded-full border-2 p-2 border-[#9c3466] hover:bg-[#9c3466] transition duration-400"><a href="#"><img className="group-hover:invert filter transition" width="26" height="26" src="https://img.icons8.com/metro/26/facebook-new--v2.png" alt="facebook-new--v2" /></a></li>
                            <li className="group rounded-full border-2 p-2 border-[#9c3466] hover:bg-[#9c3466] transition duration-400"><a href="#"><img className="group-hover:invert filter transition" width="26" height="26" src="https://img.icons8.com/metro/26/instagram-new.png" alt="instagram-new" /></a></li>
                            <li className="group rounded-full border-2 p-2 border-[#9c3466] hover:bg-[#9c3466] transition duration-400"><a href="#"><img className="group-hover:invert filter transition" width="26" height="26" src="https://img.icons8.com/glyph-neue/64/youtube-play.png" alt="youtube-play" /></a></li>
                            <li className="group rounded-full border-2 p-2 border-[#9c3466] hover:bg-[#9c3466] transition duration-400"><a href="#"><img className="group-hover:invert filter transition" width="26" height="26" src="https://img.icons8.com/ios-glyphs/30/twitterx--v2.png" alt="twitterx--v2" /></a></li>
                        </ul>
                    </ul>
                </div>
                <hr className="my-4 mx-0 text-gray-200" />
                <p className="mx-32 my-6 text-[#8e8e8e] font-sans"><span className="hover:text-[#9c3466]">The Cross Purpose</span> © 2022 - All Rights Reserved</p>
            </footer>
        </div>
    )
}