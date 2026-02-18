import whatGospel from "./assets/what_gospel.jpg";

function SectionOne() {
    const underlineEffect = "after:content-[''] after:w-0 after:h-0.5 after:bg-black after:absolute relative after:bottom-0 after:left-0 ml-10 hover:after:w-full after:transition-all after:duration-500 inline-block hover:cursor-pointer"

    return (
        <div className="flex  mt-10 bg-amber-50  ml-30">
            <div id="left-side" className="">
                <img src={whatGospel} alt="what_gospel" className="w-2xs" />
                <a href="" className={`${underlineEffect}`}>What is the Gospel?</a>
            </div>

            <div id="center" className="ml-40">
                <img src={whatGospel} alt="what_gospel" className="w-2xs" />
            </div>

            <div id="right-side">

            </div>

        </div>
    )
}

export default SectionOne