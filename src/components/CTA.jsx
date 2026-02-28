
export default function CTA() {


    return (
        <div className="bg-[#9c3466] my-18 mx-32 flex flex-col items-center py-15 text-white">
            <img className="filter brightness-0 invert w-12 h-12" src="https://cdn-icons-png.flaticon.com/256/6941/6941697.png" alt="crown" />
            <h1 className="font-bold text-2xl font-serif pt-8">Enjoy Unlimited Access To All Our</h1>
            <h1 className="font-bold text-2xl font-serif">Resources For Free!</h1>
            <div className="pt-5 pb-6 text-center  ">
                <p>To know about how you can support this</p>
                <p>ministry, write to us at</p>
                <p>thexpurpose@gmail.com</p>
            </div>
            <div className="cursor-pointer border-2 border-white rounded-4xl py-4 px-6 hover:bg-white hover:text-black transition duration-400">
                <p className="font-bold">Subscribe Now</p>
            </div>
        </div>
    )
}