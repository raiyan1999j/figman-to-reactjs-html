import Package from "../../../../public/package.png";
import Medal from "../../../../public/medal.png";
import Bag from "../../../../public/bag.png"

export default function Badges(){
    return(
        <>
            <section className="w-full mt-[74px]">
                <div className="w-[1320px] mx-auto">
                    <div className="flex flex-row">
                        <div className="flex flex-row items-center w-[440px]">
                            <div className="h-[90px] w-[90px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A] mr-4">
                                <div className="h-10 w-10">
                                <img src={Package} alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h4 className="uppercase font-bold font-bebus text-[30px] leading-9 text-[#0A1425]">fast delivery</h4>
                                <p className="capitalize font-normal font-robot text-xl leading-8 tracking-[1.5%]">
                                Within 30 minutes
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-[440px]">
                            <div className="h-[90px] w-[90px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A] mr-4">
                                <div className="h-10 w-10">
                                <img src={Medal} alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h4 className="uppercase font-bold font-bebus text-[30px] leading-9 text-[#0A1425]">absolute dining</h4>
                                <p className="capitalize font-normal font-robot text-xl leading-8 tracking-[1.5%]">
                                Best buffet restaurant
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-[440px]">
                            <div className="h-[90px] w-[90px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A] mr-4">
                                <div className="h-10 w-10">
                                <img src={Bag} alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h4 className="uppercase font-bold font-bebus text-[30px] leading-9 text-[#0A1425]">pickup delivery</h4>
                                <p className="capitalize font-normal font-robot text-xl leading-8 tracking-[1.5%]">
                                Grab your food order
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}