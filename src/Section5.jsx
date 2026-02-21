import { FaArrowAltCircleRight, FaArrowCircleRight, FaArrowRight, FaArrowsAlt, FaRegArrowAltCircleRight } from "react-icons/fa";
import meetmario from "./assets/meetmario.jpg"
import "./styles.css"

export default function Section5() {
    const underlineEffect = "after:content-[''] after:w-0 after:h-0.5 after:bg-black after:absolute relative after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 w-max hover:cursor-pointer"

    function handleUnderline() {

    }

    return (
        <div className="mx-32">
            <section>
                <hr className="mt-2 border-2 text-[#9c3466]" />
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold tracking-wider py-3">PODCASTS</p> <FaArrowRight className="mt-0.5" />
                </div>
            </section>
            <hr className="mb-8 text-gray-200" />
            <section className="flex gap-5">
                <div className="flex border-r pr-5 w-160 border-gray-300 wrap-break-word">
                    <div className="w-160 h-90 bg-amber-500 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://thecrosspurpose.com/wp-content/uploads/2024/08/1-400x300.webp" alt="meet mario" />
                    </div>
                    <ul className="flex-col ml-8 mt-18">
                        <li><p className="text-xs font-semibold tracking-wider whitespace-break-spaces"><a href="#"><span className="text-[#9c3466] hover:text-gray-500"><span className="text-lg">●</span> FEATURED POST</span></a>     <a href="#"><span className="hover:text-[#9c3466]">PODCAST</span></a>     <a href="#"><span className="hover:text-[#9c3466]">THE SHOW</span></a></p></li>
                        <ul className="underlineGroup mt-2">
                            <li className="underlineEffect font-bold text-xl">Meet Pastor Mario -</li>
                            <li className="underlineEffect font-bold text-xl -mt-1.5">Reformation in India</li>
                        </ul>
                        <li className="mt-4"><p className="text-sm text-justify">🎙️ Podcast Episode: Meet Pastor Mario - Reformation in India 🇮🇳 Join us for an awesome episode as we sit …</p></li>
                        <li className="mt-4 font-bold flex flex-row gap-3 hover:text-[#9c3466]">Play Episode <FaRegArrowAltCircleRight size={20} className="mt-1" /></li>
                    </ul>
                </div>
                <div className="wrap-break-word w-80">
                    <div className="flex gap-5.5 mb-3.5">
                        <a href="#">
                            <div className="w-25 h-25 shrink-0">
                                <img src="https://thecrosspurpose.com/wp-content/uploads/2022/05/E58C77CB-E8DC-49E8-8721-1C7974C80FC5-150x150.png" alt="coalition concerns" />
                            </div>
                        </a>
                        <div className="flex flex-col">
                            <a href="#"><p className="font-semibold text-[22px] leading-6 pb-4">Concerned about The Coalition (Par<span className="text-sm">...</span></p></a>
                            <a href="#"><p className="font-bold flex flex-row gap-3 hover:text-[#9c3466]">Play Episode <FaRegArrowAltCircleRight size={20} className="mt-1" /></p></a>
                        </div>
                    </div>
                    <hr className="mb-3.5 text-gray-200" />
                    <div className="flex gap-5.5 mb-3.5">
                        <a href="">
                            <div className="w-25 h-25 shrink-0">
                                <img className="w-full h-full object-cover" src="https://thecrosspurpose.com/wp-content/uploads/2022/09/engin-akyurt-KtYvqysesC4-unsplash-300x200.jpg" alt="covid times" />
                            </div>
                        </a>
                        <div className="flex flex-col">
                            <a href="#"><p className="font-semibold text-[22px] leading-6 pb-4">Podcast - COVID, the Cross & the En<span className="text-sm">...</span></p></a>
                            <a href="#"><p className="font-bold flex flex-row gap-3 hover:text-[#9c3466]">Play Episode <FaRegArrowAltCircleRight size={20} className="mt-1" /></p></a>
                        </div>
                    </div>
                    <hr className="mb-3.5 text-gray-200" />
                    <div className="flex gap-5.5 mb-3.5">
                        <a href="#">
                            <div className="w-25 h-25 shrink-0">
                                <img className="w-full h-full object-cover" src="https://thecrosspurpose.com/wp-content/uploads/2022/09/severin-hoin-oXVCgaDqX30-unsplash-300x212.jpg" alt="coalition concerns" />
                            </div>
                        </a>
                        <div className="flex flex-col">
                            <a href="#"><p className="font-semibold text-[22px] leading-6 pb-4">Podcast - Apologetics, the<span className="text-sm">...</span></p></a>
                            <a href="#"><p className="font-bold flex flex-row gap-3 hover:text-[#9c3466]">Play Episode <FaRegArrowAltCircleRight size={20} className="mt-1" /></p></a>
                        </div>
                    </div>
                </div>
                <div className="border-7 w-70 border-[#dfdfdf] wrap-break-word">
                    <p className="text-[#c4c4c4] text-xs font-semibold tracking-wider whitespace-break-spaces ml-5 mt-7">COMING SOON - DEC 2022</p>
                    <div className="h-8 mt-31.5 mx-5">
                        <img src="https://thecrosspurpose.com/wp-content/uploads/2022/09/UNASHAMED-2-300x44.png" alt="unashamed" />
                    </div>
                    <p className="text-lg mx-5 mt-3 mb-4.5">The Annual Cross Purpose Magazine</p>
                    <div className="bg-[#9c3466] text-white h-12.5 mx-5 rounded-4xl py-2.5 px-10 border-2 border-[#9c3466] hover:bg-white hover:text-black hover:border-black transition duration-400">
                        <p className="font-bold">FREE Digital Copy</p>
                    </div>
                </div>
            </section>
        </div>
    )
}