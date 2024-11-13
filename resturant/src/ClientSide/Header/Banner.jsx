import OfferImg from "../../../public/offerImg.png";
import Star from "../../../public/star.png";

export default function Banner(){
    return(
        <>
            <section className="w-full pt-[130px] pb-[160px] relative bg-[#BD1F17]/90 before:content-'' before:absolute before:bg-bannerBg before:inset-0 overflow-hidden">
                <div className="w-[1320px] mx-auto">
                    <div className="flex flex-row w-full items-center">
                        <div className="w-[946px] z-50">
                        <div className="w-[830px] bg-bannerHeader text-white mb-4">
                            <h1 className="font-bebus text-[120px] font-bold leading-[130px]">
                            Taste the authentic
                            Saudi cuisine
                            </h1>
                        </div>
                            <div className="w-[559px] mb-4">
                            <p className="font-robot text-2xl font-normal leading-8 text-white">
                            Among the best Saudi chefs in the world, serving you something beyond flavor. 
                            </p>
                            </div>
                            <button className="font-robot font-bold text-lg leading-6 uppercase h-[56px] w-[180px] flex justify-center items-center bg-[#FEBF00] text-[#0A1425]">
                                explore menu
                            </button>
                        </div>
                        <div className="z-30">
                            <div className="h-[649px] w-[700px] translate-x-[-203px] relative">
                            <div className="absolute h-full w-full">
                            <img src={OfferImg} alt="offerImg" className="h-full w-full object-cover" />
                            </div>
                                <span className="absolute h-[45px] w-[45px] left-[683px] top-[-35px]">
                                    <img src={Star} alt="starVector" className="h-full w-full object-contain" />
                                </span>
                                <span className="h-[120px] w-[120px] rounded-[75.47px] bg-[#FEBF00] absolute flex justify-center items-center bottom-[1.5px] left-[631.5px]">
                                    <span className="h-[105.66px] w-[105.66px] border-2 border-[#BD1F17] border-dashed absolute rounded-full text-4xl font-bold font-bebus leading-[36px] text-[#0A1425] uppercase flex justify-center items-center pt-[19.71px] pr-[18.71px] pb-[13.95px] pl-[17.95px]">
                                        today offer
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}