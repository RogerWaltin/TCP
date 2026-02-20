

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

            <div id="latest" className="ml-5 w-165.25 border-x border-gray-300">
                <div className="ml-5">
                    {/* <div className="w-50 h-30"><img src="https://thecrosspurpose.com/wp-content/uploads/2025/10/unshakable-ones-1024x682.webp" alt="" className=" w-full h-full"/></div> */}

                </div>
            </div>

            <div id="newsletter">

            </div>
        </div>
    )
}


/*for section2: <div className="mx-32 bg-red-900 w-74">
                    <div className="w-69.5 bg-red-400">wow</div>
                </div> */