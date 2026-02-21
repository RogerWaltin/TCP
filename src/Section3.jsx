import { FaArrowRight, FaRegClock } from "react-icons/fa"
import mail from "./assets/mail_logo.png"

export default function Section3() {
    const underlineEffect = "after:content-[''] after:w-0 after:h-0.5 after:bg-black after:absolute relative after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 w-max hover:cursor-pointer"

    return (
        <div className="flex mx-32">
            <div id="writers" className="flex flex-col w-69 min-w-0 wrap-break-word border-t-[0.15rem] border-[#a84d79]">
                <p className="font-semibold text-lg mt-2.75">WRITERS</p>
                <div id="Mike" className="border-t border-gray-300 mt-[14.7px] flex gap-3">
                    <span className="shrink-0 overflow-hidden w-15 h-15 rounded-full border-3 border-[#a84d79] ml-1.5 mt-[9.4px]"><img src="https://thecrosspurpose.com/wp-content/uploads/2024/12/Screenshot-2024-12-04-010939-96x96.png" alt="" /></span>
                    <p className={`text-2xl font-serif mt-4.25 hover:cursor-pointer ${underlineEffect}`}>Who is Michael Teddy?</p>
                </div>

                <div id="Benji" className="border-t border-gray-300 mt-[14.7px] flex gap-3">
                    <span className="shrink-0 overflow-hidden w-15 h-15 rounded-full border-3 border-[#a84d79] ml-1.5 mt-[9.4px]"><img src="https://secure.gravatar.com/avatar/cc49c4447f5967c079434bedb19779966db1c03bd72280e5b8b53f1f6b0c8e21?s=96&d=mm&r=g" alt="" /></span>
                    <p className={`text-2xl font-serif mt-4.25 hover:cursor-pointer ${underlineEffect}`}>Who is Benjamin Abraham?</p>
                </div>

                <div id="Ashok" className="border-t border-gray-300 mt-[14.7px] flex gap-3">
                    <span className="shrink-0 overflow-hidden w-15 h-15 rounded-full border-3 border-[#a84d79] ml-1.5 mt-[9.4px]"><img src="https://thecrosspurpose.com/wp-content/uploads/2024/12/ashok-96x96.jpg" alt="" /></span>
                    <p className={`text-2xl font-serif mt-4.25 hover:cursor-pointer ${underlineEffect}`}>Who is Ashok Mohanakumar?</p>
                </div>

                <div id="Steve" className="border-t border-gray-300 mt-[14.7px] flex gap-3">
                    <span className="shrink-0 overflow-hidden w-15 h-15 rounded-full border-3 border-[#a84d79] ml-1.5 mt-[9.4px]"><img src="https://secure.gravatar.com/avatar/0d1db6c28f0ce06aabee7a77912459cf5554b86287637e705f56b682d8ef18ca?s=96&d=mm&r=g" alt="" /></span>
                    <p className={`text-2xl font-serif mt-4.25 hover:cursor-pointer ${underlineEffect}`}>Who is Steve Waltin?</p>
                </div>
            </div>

            <div id="latest" className="ml-5 w-169.5 border-x border-gray-300 wrap-break-word min-w-0">
                <div className="mx-5 w-159.2 flex flex-col min-w-0 wrap-break-word border-t-[0.15rem] border-t-[#a84d79]">
                    <span className="flex hover:cursor-pointer hover:text-[#a84d79] transition duration-300 gap-3.5"><p className="font-semibold text-lg mt-2.75">LATEST </p><FaArrowRight className="mt-4.5" /></span>

                    <div className="border-t border-gray-300 mt-[14.7px] flex gap-5">
                        <span className="hover:cursor-pointer mt-3.25 w-57.5 h-37.5">
                            <img src="https://thecrosspurpose.com/wp-content/uploads/2025/10/unshakable-ones-1024x682.webp" alt="" className=" w-full h-full " />
                        </span>
                        <div className="flex flex-col justify-center">
                            <span className={`text-[1.4rem] font-serif mt-4.25 hover:cursor-pointer ${underlineEffect} h-fit`}>
                                The Unshakable Ones of Zion
                            </span>
                            <span className="mt-3 flex gap-3">
                                <span className="text-[0.9rem] text-gray-500 flex gap-1"><FaRegClock size={10} className="mt-1.5" />October 20, 5:51 AM</span>
                                <span className="text-[0.9rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 hover:cursor-pointer">Ashok Mohanakumar</span></span>
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 mt-[14.7px] flex gap-5">
                        <span className="hover:cursor-pointer mt-3.25 w-57.5 h-37.5 shrink-0">
                            <img src="https://thecrosspurpose.com/wp-content/uploads/2025/08/gold_banner-300x169.png" alt="" className=" w-full h-full " />
                        </span>
                        <div className="flex flex-col justify-center">
                            <span className={`text-[1.4rem] font-serif mt-4.25 hover:cursor-pointer ${underlineEffect} h-fit`}>
                                A Biblical Theology of Gold and Glory
                            </span>
                            <span className="mt-3 flex gap-3">
                                <span className="text-[0.9rem] text-gray-500 flex gap-1"><FaRegClock size={10} className="mt-1.5" />August 18, 3:58 PM</span>
                                <span className="text-[0.9rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 hover:cursor-pointer">Ashok Mohanakumar</span></span>
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 mt-[14.7px] flex gap-5">
                        <span className="hover:cursor-pointer mt-3.25 w-57.5 h-37.5">
                            <img src="https://thecrosspurpose.com/wp-content/uploads/2024/03/name_-gravity-vStkVmrfTrw-unsplash-300x200.jpg" alt="" className=" w-full h-full " />
                        </span>
                        <div className="flex flex-col justify-center">
                            <span className={`text-[1.4rem] font-serif mt-4.25 hover:cursor-pointer ${underlineEffect} h-fit`}>
                                From Pretence to Purity
                            </span>
                            <span className="mt-3 flex gap-3">
                                <span className="text-[0.9rem] text-gray-500 flex gap-1"><FaRegClock size={10} className="mt-1.5" />March 21, 2:00 PM</span>
                                <span className="text-[0.9rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 hover:cursor-pointer">Michael Teddy</span></span>
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 mt-[14.7px] flex gap-5">
                        <span className="hover:cursor-pointer mt-3.25 w-57.5 h-37.5">
                            <img src="https://thecrosspurpose.com/wp-content/uploads/2024/01/joshua-earle-EszQhMd_sBo-unsplash-300x200.jpg" alt="" className=" w-full h-full " />
                        </span>
                        <div className="flex flex-col justify-center">
                            <span className={`text-[1.4rem] font-serif mt-4.25 hover:cursor-pointer ${underlineEffect} h-fit`}>
                                Sarcasm and Scripture
                            </span>
                            <span className="mt-3 flex gap-3">
                                <span className="text-[0.9rem] text-gray-500 flex gap-1"><FaRegClock size={10} className="mt-1.5" />January 26, 5:46 AM</span>
                                <span className="text-[0.9rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 hover:cursor-pointer">Michael Teddy</span></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="newsletter" className="ml-5.5">
                <p className="text-lg font-serif">Stay Connected</p>
                <div className="border-7 w-70 border-gray-300 flex flex-col items-center text-center gap-3 wrap-break-word min-w-0 mt-3">
                    <img src={mail} alt="" className="w-30" />
                    <p className="text-3xl font-serif">The REDHILL Newsletter</p>
                    <p className="mb-10 font-serif mx-2">Subscribe to us and get the Redemption Hill Church Newsletter every month.</p>
                </div>
            </div>
        </div>
    )
}