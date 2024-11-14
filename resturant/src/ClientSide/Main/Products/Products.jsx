import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FoodItems1 from "../../../../public/foodItems1.png";
import FoodItems2 from "../../../../public/foodItems2.png";
import FoodItems3 from "../../../../public/foodItems3.png";
import FoodItems4 from "../../../../public/foodItems4.png";
import Items1 from "../../../../public/items1.png";

export default function Products(){
    return(
        <>
            <section className="w-full mt-[130px] bg-[#FBF7F2] py-[120px] relative">
                <div className="absolute h-[492.04px] w-[526.31px] top-[211px] left-[-372px] rotate-[-72deg]">
                    <img src={Items1} alt="items2" className="h-full w-full object-cover" />
                </div>
                <div className="w-[1320px] mx-auto mb-4">
                    <div>
                        <ul className=" font-robot font-bold text-xl leading-8 text-[#BD1F17] list-square">
                            <li>
                            Crispy, Every Bite Taste
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-[1320px] mx-auto">
                    <div className="flex flex-row w-full items-center">
                    <div className="w-[1168px]">
                        <h3 className=" font-bebus font-bold text-[62px] leading-[62px] text-[#181818]">
                        POPULAR FOOD ITEMS
                        </h3>
                    </div>

                    <div className="flex flex-row gap-x-8">
                        <span className="h-[60px] w-[60px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A]">
                        <FaChevronLeft className="text-[18.71px] text-[#0A1425]"/>
                        </span>
                        <span className="h-[60px] w-[60px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A]">
                        <FaChevronRight className="text-[18.71px] text-[#0A1425]"/>
                        </span>
                    </div>
                    </div>
                </div>

                <div className="w-[1320px] mx-auto mt-[60px]">
                    <div className="grid grid-cols-[repeat(4,_306px)] gap-x-8">
                        <div className="bg-white flex flex-col items-center">
                            <div className="h-[124px] w-[186px] pt-[30px] ">
                                <img src={FoodItems1} alt="burger" className="h-full w-full object-contain" />
                            </div>
                            
                            <span className="h-1 w-[57px] bg-[#BD1F17] mt-[22px]"></span>
                            <div className="mt-6 w-[242px] text-center pb-8">
                                <h4 className=" font-bebus font-bold text-2xl leading-9 text-[#0A1425] uppercase">
                                vegetables burger
                                </h4>
                                <p className=" font-normal text-base leading-8 font-robot tracking-[-1.5%] text-[#0A1425]">
                                Barbecue Italian cuisine pizza
                                </p>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col items-center">
                            <div className="h-[124px] w-[186px] pt-[30px] ">
                                <img src={FoodItems2} alt="pizza" className="h-full w-full object-contain" />
                            </div>
                            
                            <span className="h-1 w-[57px] bg-[#BD1F17] mt-[22px]"></span>
                            <div className="mt-6 w-[242px] text-center pb-8">
                                <h4 className=" font-bebus font-bold text-2xl leading-9 text-[#0A1425] uppercase">
                                Spacial Pizza 
                                </h4>
                                <p className=" font-normal text-base leading-8 font-robot tracking-[-1.5%] text-[#0A1425]">
                                Barbecue Italian cuisine pizza
                                </p>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col items-center">
                            <div className="h-[124px] w-[186px] pt-[30px] ">
                                <img src={FoodItems3} alt="burger" className="h-full w-full object-contain" />
                            </div>
                            
                            <span className="h-1 w-[57px] bg-[#BD1F17] mt-[22px]"></span>
                            <div className="mt-6 w-[242px] text-center pb-8">
                                <h4 className=" font-bebus font-bold text-2xl leading-9 text-[#0A1425] uppercase">
                                Spacial French fries 
                                </h4>
                                <p className=" font-normal text-base leading-8 font-robot tracking-[-1.5%] text-[#0A1425]">
                                Barbecue Italian cuisine
                                </p>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col items-center">
                            <div className="h-[124px] w-[186px] pt-[30px] ">
                                <img src={FoodItems4} alt="burger" className="h-full w-full object-contain" />
                            </div>
                            
                            <span className="h-1 w-[57px] bg-[#BD1F17] mt-[22px]"></span>
                            <div className="mt-6 w-[242px] text-center pb-8">
                                <h4 className=" font-bebus font-bold text-2xl leading-9 text-[#0A1425] uppercase">
                                Cuisine Chicken
                                </h4>
                                <p className=" font-normal text-base leading-8 font-robot tracking-[-1.5%] text-[#0A1425]">
                                Japanese Cuisine Chicken
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}