import whatGospel from "./assets/what_gospel.jpg";
import outDo from "./assets/outdo.jpg"

function SectionOne() {
    const underlineEffect = "after:content-[''] after:w-0 after:h-0.5 after:bg-black after:absolute relative after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 w-max hover:cursor-pointer"

    return (
        <div className="flex ml-30 mr-30 mt-10 gap-6">
            <div id="left-side" className="flex flex-col border-r border-gray-300 pr-6">
                <img src={whatGospel} alt="what_gospel" className="w-2xs" />
                <a href="" className={`${underlineEffect} mt-3 text-2xl font-serif`}>What is the Gospel?</a>
                <span className="mt-3 hover:text-gray-500 w-max hover:cursor-pointer transition duration-300">Michael Teddy</span>
                <hr className="mt-4 text-gray-200 mb-4" />

                <img src={outDo} alt="outdo" className="w-2xs" />
                <a href="" className={`${underlineEffect} mt-3 text-2xl font-serif`}>Outdo One Another</a>
                <span className="mt-3 hover:text-gray-500 hover:cursor-pointer transition duration-300 w-max">Ashok Mohanakumar</span>
            </div>

            <div id="center" className="">
                <img src={whatGospel} alt="what_gospel" className="w-2xs" />
            </div>

            <div id="right-side">

            </div>

        </div>
    )
}

export default SectionOne