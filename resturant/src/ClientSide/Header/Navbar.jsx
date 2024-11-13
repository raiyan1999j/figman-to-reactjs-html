import Logo from "../../../public/logoImg.png";

export default function Navbar(){
    return(
        <>
            <section className="w-full mx-auto relative bg-bannerBg before:content-'' before:table before:absolute before:w-full before:bg-[#BD1F17]/90 before:h-full before:bg-cover before:-z-30">
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
                            <li>home</li>
                            <li>about</li>
                            <li>portfolio</li>
                            <li>clients</li>
                            <li>blog</li>
                            <li>contact</li>
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