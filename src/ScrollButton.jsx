import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button type="button" onClick={backToTop}
            className={`
                fixed bottom-10 right-10 p-3 bg-[#9c3466] text-white rounded-full shadow-md transform transition-all duration-500 ease-out
                ${showButton ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-10 scale-90 pointer-events-none"}
            `}
        >
            <FaArrowUp size={25} />
        </button>
    );
}