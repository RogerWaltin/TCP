import whatGospel from "./assets/what_gospel.jpg";
import outDo from "./assets/outdo.jpg"
import unshakable from "./assets/unshakable-ones.jpg"
import { underlineEffect1, underlineEffect2, underlineEffect3 } from "./underlineEffects";


function Section1() {
    const underlineEffect = "after:content-[''] after:w-0 after:h-0.5 after:bg-black after:absolute relative after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 w-max cursor-pointer"

    return (
        <div className="flex mx-32 my-10 gap-5">
            <div id="left-side" className="flex flex-col border-r border-gray-300 pr-6">
                <img src={whatGospel} alt="what_gospel" className="w-2xs cursor-pointer" />
                <a href="" className={`${underlineEffect} mt-3 text-2xl font-serif`}>What is the Gospel?</a>
                <span className="mt-3 hover:text-gray-500 w-max cursor-pointer transition duration-300">Michael Teddy</span>
                <hr className="my-4 text-gray-200" />

                <img src={outDo} alt="outdo" className="w-2xs cursor-pointer" />
                <a href="" className={`${underlineEffect} mt-3 text-2xl font-serif`}>Outdo One Another</a>
                <span className="mt-3 hover:text-gray-500 cursor-pointer transition duration-300 w-max">Ashok Mohanakumar</span>
            </div>

            <div id="center" className="pr-6 border-r border-gray-300 flex flex-col items-center max-w-160 w-full ">
                <img src={unshakable} alt="unshakable" className=" mb-4" />
                <div className="flex justify-center gap-6">
                    <span className="font-semibold text-[0.8rem] tracking-widest group text-[#9c3466] transition duration-500 hover:text-gray-500 cursor-pointer"><span className="inline-block w-2.5 h-2.5 rounded-full bg-[#9c3466] mr-2 group-hover:bg-gray-500 transition duration-300"></span>FEATURED POST</span>
                    <span className="text-[0.8rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 cursor-pointer">Ashok Mohanakumar</span></span>

                </div>
                <span className={`${underlineEffect} text-xl font-serif mt-2`}>The Unshakable Ones of Zion</span>
                <p className="text-md font-serif mt-2">Gold appears frequently in the Bible, from the rivers of Eden to the gifts of the Magi. The use of gold is often symbolic of something of high value or honor. The Bible recounts that gold was a gift given to Christ at his birth. This act emphasizes that gold is a fitting tribute for …</p>
            </div>

            <div id="right-side" className="flex flex-col">
                <div className="flex gap-4">
                    <div className="shrink-0 flex flex-col">
                        <a href="" className={`group text-lg font-serif min-w-0 max-w-60 font-semibold`}><span className={underlineEffect1}>The Unshakable</span><br /><span className={underlineEffect2}>Ones of Zion</span></a>
                        <span className="text-[0.8rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 cursor-pointer">Ashok Mohanakumar</span></span>
                    </div>
                    <div className="w-24 h-24 overflow-hidden ml-auto">
                        <img src={unshakable} alt="unshakable" className="w-[80%] h-[80%] object-cover ml-auto" />
                    </div>
                </div>
                <hr className="my-4 text-gray-200" />

                <div className="flex">
                    <div className="flex flex-col shrink-0">
                        <a href="" className={`group text-lg font-serif min-w-0 max-w-50 font-semibold`}><span className={underlineEffect1}>A Biblical</span><br /><span className={underlineEffect2}>Theology of Gold</span><br /><span className={underlineEffect3}>and Glory</span></a>
                        <span className="text-[0.8rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 cursor-pointer">Ashok Mohanakumar</span></span>
                    </div>
                    <div className="w-24 h-24 overflow-hidden ml-auto">
                        <img src="https://thecrosspurpose.com/wp-content/uploads/2025/08/gold_banner-100x100.png" alt="gold" className="w-[80%] h-[80%] object-cover ml-auto" />
                    </div>
                </div>
                <hr className="my-4 text-gray-200" />

                <div className="flex">
                    <div className="flex flex-col shrink-0">
                        <a href="" className={`group text-lg font-serif min-w-0 max-w-50 font-semibold`}><span className={underlineEffect1}>Fatherhood And</span><br /><span className={underlineEffect2}>The Imitation of</span><br /><span className={underlineEffect3}>God</span></a>
                        <span className="text-[0.8rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 cursor-pointer">Ashok Mohanakumar</span></span>
                    </div>
                    <div className="w-24 h-24 overflow-hidden ml-auto">
                        <img src="https://thecrosspurpose.com/wp-content/uploads/2025/08/ChatGPT-Image-Aug-5-2025-10_22_10-PM-100x100.png" alt="fatherhood" className="w-[80%] h-[80%] object-cover ml-auto" />
                    </div>
                </div>
                <hr className="my-4 text-gray-200" />

                <div className="flex">
                    <div className="flex flex-col">
                        <a href="" className={`group text-lg font-serif min-w-0 max-w-50 font-semibold`}><span className={underlineEffect1}>No Slavery to</span><br /><span className={underlineEffect2}>Christ, No</span><br /><span className={underlineEffect3}>Heaven!</span></a>
                        <span className="text-[0.8rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 cursor-pointer">Pankaj</span></span>
                    </div>
                    <div className="w-24 h-24 overflow-hidden ml-auto">
                        <img src="https://thecrosspurpose.com/wp-content/uploads/2025/07/strong_linked_chain-100x100.webp" alt="slavery" className="w-[80%] h-[80%] object-cover ml-auto" />
                    </div>
                </div>
                <hr className="my-4 text-gray-200" />

                <div className="flex">
                    <div className="flex flex-col">
                        <a href="" className={`group text-lg font-serif min-w-0 max-w-50 font-semibold`}><span className={underlineEffect1}>Obedience is</span><br /><span className={underlineEffect2}>better than</span><br /><span className={underlineEffect3}>Sacrifice</span></a>
                        <span className="text-[0.8rem] text-gray-500">By <span className="text-black font-semibold hover:text-gray-500 transition duration-300 cursor-pointer">Ashok Mohanakumar</span></span>
                    </div>
                    <div className="w-24 h-24 overflow-hidden ml-auto">
                        <img src="https://thecrosspurpose.com/wp-content/uploads/2024/12/lamb-5733685_1280.jpg" alt="obedience" className="w-[80%] h-[80%] object-cover ml-auto" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Section1