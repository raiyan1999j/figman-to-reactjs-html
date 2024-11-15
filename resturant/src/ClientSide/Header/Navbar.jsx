import { useEffect, useState } from "react";
import Logo from "../../../public/logoImg.png";

export default function Navbar(){
    const [scrollDetection,setScrollDetect] = useState(0);

    useEffect(()=>{
        const handleScroll=()=>{
            setScrollDetect(window.scrollY)
        }

        window.addEventListener("scroll",handleScroll);

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    return(
        <>
            <section className={`w-full mx-auto ${scrollDetection>10?
            "fixed top-0 h-[108px] w-full bg-[#BD1F17]/90 z-50 before:content-'' before:table before:bg-bannerBg before:absolute before:inset-0 before:h-full before:w-full before:-z-30":
            "relative bg-bannerBg before:content-'' before:table before:absolute before:w-full before:bg-[#BD1F17]/90 before:h-full before:bg-cover before:-z-30"}`}>
                <nav className="w-[1320px] h-[108px] mx-auto flex flex-row items-center text-white">
                    <div className="flex flex-row items-center">
                        <span className="w-[36.99px] h-[37px] mr-[5.99px]">
                            <img src={Logo} alt="logo" className="h-full w-full object-contain"/>
                        </span>
                        <h4 className="capitalize font-poppins font-normal text-[28.44px] leading-[28.44px]">
                            restaurant
                        </h4>
                    </div>

                    <div className="ml-[60px]">
                        <ul className="capitalize font-raleway font-medium text-[15px] leading-[17.61px] flex flex-row gap-x-10">
                            <li className=" hover:cursor-pointer">home</li>
                            <li className=" hover:cursor-pointer">about</li>
                            <li className=" hover:cursor-pointer">portfolio</li>
                            <li className=" hover:cursor-pointer">clients</li>
                            <li className=" hover:cursor-pointer">blog</li>
                            <li className=" hover:cursor-pointer">contact</li>
                        </ul>
                    </div>

                    <div className="ml-auto">
                        <button className="uppercase font-robot font-bold text-base leading-[24px] text-[#0A1425] h-[44px] w-[157px] bg-[#FEBF00] flex justify-center items-center">
                            book a table
                        </button>
                    </div>
                </nav>
            </section>
        </>
    )
}