import { FaFacebook, FaInstagramSquare, FaLinkedin, FaRegClock, FaRegCopyright, FaRegEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer(){
    return(
        <>
            <section className="w-full mt-[120px] bg-footerBg bg-contain py-[120px]">
                <div className="w-[1320px] mx-auto text-center mb-12">
                    <h2 className=" font-bebus font-bold text-[62px] leading-[64px] text-white uppercase">
                    We ready to have you the best dining experiences
                    </h2>
                </div>

                <div className="w-[1320px] mx-auto mb-[120px]">
                    <div className="grid grid-cols-[repeat(4,_312px)] gap-x-6 w-full">
                        <div className="w-full flex flex-col items-center">
                            <div className="mb-6">
                            <FaRegClock className="text-[#FEBF00] text-[22.5px]"/>
                            </div>

                            <div className="w-full text-center">
                                <h3 className=" font-bebus font-bold text-2xl leading-7 tracking-widest text-white capitalize mb-4">
                                Opening hours
                                </h3>

                                <div className=" font-robot font-normal text-base leading-[25px] text-white w-[235px] mx-auto">
                                <p>
                                Monday - Sunday
                                </p>
                                <p>
                                9:00 AM to 11:30 PM
                                </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <div className="mb-6">
                            <FiPhoneCall className="text-[#FEBF00] text-[22.5px]"/>
                            </div>

                            <div className="w-full text-center">
                                <h3 className=" font-bebus font-bold text-2xl leading-7 tracking-widest text-white capitalize mb-4">
                                LET'S TALK
                                </h3>

                                <div className=" font-robot font-normal text-base leading-[25px] text-white capitalize w-[235px] mx-auto">
                                <p>
                                phone: 1-880-222-4545
                                </p>
                                <p>
                                fax: 1-880-222-4545
                                </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <div className="mb-6">
                            <FaRegEnvelope className="text-[#FEBF00] text-[22.5px]"/>
                            </div>

                            <div className="w-full text-center">
                                <h3 className=" font-bebus font-bold text-2xl leading-7 tracking-widest text-white capitalize mb-4">
                                BOOK A TABLE
                                </h3>

                                <div className=" font-robot font-normal text-base leading-[25px] text-white w-[235px] mx-auto">
                                <p>
                                Email: demo@website.com
                                </p>
                                <p>
                                Support: support@website.com
                                </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <div className="mb-6">
                            <IoLocationOutline className="text-[#FEBF00] text-[22.5px]"/>
                            </div>

                            <div className="w-full text-center">
                                <h3 className=" font-bebus font-bold text-2xl leading-7 tracking-widest text-white capitalize mb-4">
                                Our Address
                                </h3>

                                <div className=" font-robot font-normal text-base leading-[25px] text-white w-[235px] mx-auto">
                                <p>
                                123 Stree New York City , United States Of America.
                                </p>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[1320px] mx-auto">
                    <div className="grid grid-cols-[repeat(4,_53.45px)] gap-x-6 w-[285.82px] mx-auto mb-[25px]">
                    <div className="h-[53.45px] w-full rounded-full flex justify-center items-center border border-white">
                            <div>
                            <FaFacebook className="text-white text-2xl"/>
                            </div>
                        </div>

                        <div className="h-[53.45px] w-full rounded-full flex justify-center items-center border border-white">
                            <div>
                            <FaSquareXTwitter className="text-white text-2xl"/>
                            </div>
                        </div>

                        <div className="h-[53.45px] w-full rounded-full flex justify-center items-center border border-white">
                            <div>
                            <FaInstagramSquare className="text-2xl text-white" />
                            </div>
                        </div>

                        <div className="h-[53.45px] w-full rounded-full flex justify-center items-center border border-white">
                            <div>
                            <FaLinkedin className="text-2xl text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="w-[285.82px] mx-auto">
                    <h5 className=" font-robot font-normal text-[21px] leading-[24.61px] text-white tracking-[3%]">
                    © 2023 All Rights Reserved 
                    </h5>
                    </div>
                </div>
            </section>
        </>
    )
}