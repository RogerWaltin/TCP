import { useState } from "react";
import { FaCrown, FaFacebook } from "react-icons/fa";


export default function CTA() {


    return (
        <div className="bg-[#9c3466] my-18 mx-32 flex flex-col items-center py-15 text-white">
            <FaCrown size={50} className="" />
            <h1 className="font-bold text-2xl font-serif pt-8">Enjoy Unlimited Access To All Our</h1>
            <h1 className="font-bold text-2xl font-serif">Resources For Free!</h1>

            <div className="pt-5 pb-6 text-center  ">
                <p>To know about how you can support this</p>
                <p>ministry, write to us at</p>
                <p>thexpurpose@gmail.com</p>
            </div>

            <div className="border-2 rounded-4xl py-4 px-6">
                <p>Subscribe Now</p>
            </div>
        </div>
    )
}