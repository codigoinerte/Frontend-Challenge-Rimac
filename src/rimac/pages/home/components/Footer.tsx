import { useEffect, useState } from "react";

const logoDark = "/images/logo-dark.svg";
const logoDarkHorizontal = "/images/logo-dark-horizontal.svg";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export const Footer = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures the effect runs only once on mount and cleanup on unmount


    return (
        <footer className="w-full bg-[#03050F] z-1">
            <div className=" max-md:flex-col max-w-[1120px] m-auto flex flex-row justify-between items-center py-8 px-6">
                <img src={windowDimensions.width<768 ? logoDarkHorizontal:logoDark} alt="Rimac" title="Rimac" />
                <div className="md:hidden w-full border-b border-[#2B304E] my-6"></div>
                <p className="text-[#F8F9FF] text-[14px] leading-4 font-normal">&copy; {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
            </div>
        </footer>
    )
}
