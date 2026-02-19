import { FaArrowRight } from "react-icons/fa";
import meetmario from "./assets/meetmario.jpg"


export default function Section5() {


    return (
        <div className="mx-32">
            <section>
                <hr className="mt-2 border-2 text-[#9c3466]" />
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold tracking-wider py-3">PODCASTS</p> <FaArrowRight className="mt-0.5" />
                </div>
            </section>
            <hr className="mb-8 text-gray-200" />
            <section className="flex">
                <div className="flex border-r pr-5 border-gray-300 whitespace-nowrap">
                    <img className="w-70" src={meetmario} alt="mario" />
                    <ul className="flex-col ml-8 mt-18">
                        <li><p><span className="text-[#9c3466] hover:text-gray-500">● Featured Post</span> <span className="hover:text-[#9c3466]">Podcast</span> <span className="hover:text-[#9c3466]">The Show</span></p></li>
                        <li className="mt-2"><p className="leading-none m-0"><span className="block font-bold text-xl">Meet Pastor Mario - </span><span className="block font-bold text-xl -mt-2">Reformation in India</span></p></li>
                        <li className="mt-4"><p className="text-sm"><span className="block">🎙️ Podcast Episode: Meet Pastor Mario - </span><span className="block">Reformation in India 🇮🇳 Join us for an awesome</span><span className="block"> episode as we sit …</span></p></li>
                        <li className="mt-4">Play Episode</li>
                    </ul>
                </div>
                <div>

                </div>
                <div>

                </div>
            </section>
        </div>
    )
}