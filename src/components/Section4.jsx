import { FaArrowRight, FaRegPlayCircle } from "react-icons/fa";
import { whiteUnderlineEffect1, whiteUnderlineEffect2, underlineEffect1, underlineEffect2 } from "./underlineEffects";

export default function Section4() {

    return (
        <div className="mx-32 mt-17">
            <section>
                <hr className="mt-2 border-2 text-[#9c3466]" />
                <div className="py-3">
                    <span className="flex flex-row items-center gap-3.5 w-fit cursor-pointer hover:text-[#a84d79] transition duration-300"><p className="text-lg font-semibold tracking-wider">VIDEOS</p> <FaArrowRight className="mt-0.5" /></span>
                </div>
            </section>
            <hr className="mb-8 text-gray-200" />
            <section className="flex gap-5 mb-22.5">
                <div className="border-r pr-5 border-gray-300 wrap-break-word">
                    <div className="w-237.5 h-125.5 shrink-0 relative cursor-pointer">
                        <img className="w-full h-full object-cover" src="https://thecrosspurpose.com/wp-content/uploads/2022/05/andre-R44EQIed8ak-unsplash.jpg" alt="" />
                        <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-5 left-5 text-white">
                            <p className="mb-2.5 uppercase text-white text-xs font-semibold tracking-wider whitespace-break-spaces"><span className="cursor-pointer hover:opacity-70 transition duration-300">Documentary</span> <span className="cursor-pointer hover:opacity-70 transition duration-300">Video</span></p>
                            <p className="group">
                                <span className={`text-2xl ${whiteUnderlineEffect1}`}>The Protestant Reformation - An Insight</span><br /><span className={`text-2xl ${whiteUnderlineEffect2}`}>into the Past</span>
                            </p>
                        </div>
                        <div className="absolute bottom-5 right-5 text-white">
                            <FaRegPlayCircle size={66} className="transition-transform duration-300 ease-in-out transform hover:scale-90" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-72.5 h-41.5 shrink-0 relative cursor-pointer">
                        <img className="w-full h-full object-cover" src="https://thecrosspurpose.com/wp-content/uploads/2023/08/what_we_do_and_why_box.jpg" alt="" />
                        <div className="absolute bottom-4 right-4 text-white">
                            <FaRegPlayCircle size={36} className="transition-transform duration-300 ease-in-out transform hover:scale-90" />
                        </div>
                    </div>
                    <p className="text-2xl font-serif leading-6 my-3 cursor-pointer border-b border-gray-300 pb-5.5 group"><span className={`${underlineEffect1}`}>Are Husbands and Wives</span> <span className={`${underlineEffect2}`}>Equal?</span></p>
                    <div className="w-72.5 h-41.5 shrink-0 pt-1 relative cursor-pointer">
                        <img className="w-full h-full object-cover" src="https://thecrosspurpose.com/wp-content/uploads/2023/08/what_we_do_and_why_box.jpg" alt="" />
                        <div className="absolute bottom-4 right-4 text-white">
                            <FaRegPlayCircle size={36} className="transition-transform duration-300 ease-in-out transform hover:scale-90" />
                        </div>
                    </div>
                    <p className="text-2xl font-serif leading-6 my-3 cursor-pointer group"><span className={`${underlineEffect1}`}>Hope for the Prodigal</span></p>
                </div>
            </section>
        </div>
    )
}