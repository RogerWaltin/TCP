import { useState } from "react";

export function Footer() {


    return (
        <div>
            <div>
                <img src="https://wallpapers.com/images/hd/epic-battle-nxkj0vpvfmne5ykg.jpg" />
            </div>
            <footer>
                <hr className="my-4 mx-0 text-gray-200" />
                <div id="listdiv" className="mx-35 my-6 flex gap-7 py-10">
                    <ul className="list border-r pr-7 border-gray-300">
                        <li className="font-bold text-xl">Pages</li>
                        <hr className="mt-2 w-10 border-2 text-[#9c3466]" />
                        <li className="pt-5">Home</li>
                        <li className="pt-5">About Us</li>
                        <li className="pt-5">Privacy Policy</li>
                        <li className="pt-5">Refund & Cancellation Policy</li>
                        <li className="pt-5">Shipping & Delivery Policy</li>
                        <li className="pt-5">Terms & Conditions</li>
                    </ul>
                    <ul className="list border-r pr-7 border-gray-300">
                        <li className="font-bold text-xl">Other Links</li>
                        <hr className="mt-2 w-10 border-2 text-[#9c3466]" />
                        <li className="pt-5">Redemption Hill Church</li>
                        <li className="pt-5">Mike's Personal Blog</li>
                        <li className="pt-5">TCP YouTube Channel</li>
                        <li className="pt-5">For The Truth</li>
                        <li className="pt-5">Sola Books</li>
                        <li className="pt-5">Equip Indian Churches</li>
                    </ul>
                    <ul className="list border-r pr-7 border-gray-300">
                        <li className="font-bold text-xl">Authors</li>
                        <hr className="mt-2 w-10 border-2 text-[#9c3466]" />
                        <li className="pt-5">Michael Teddy</li>
                        <li className="pt-5">Benjamin Abraham</li>
                        <li className="pt-5">Ashok Mohanakumar</li>
                        <li className="pt-5">Steve Waltin</li>
                    </ul>
                    <ul>
                        <img src="https://thecrosspurpose.com/wp-content/uploads/2022/09/logo-1.png" className="h-915px w-198px" />
                    </ul>
                </div>
                <hr className="my-4 mx-0 text-gray-200" />
                <p className="mx-32 my-6 text-[#8e8e8e] font-sans"><span className="hover:text-[#9c3466]">The Cross Purpose</span> © 2022 - All Rights Reserved</p>
            </footer>
        </div>
    )
}