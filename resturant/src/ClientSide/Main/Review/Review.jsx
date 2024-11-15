import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import SampleProfile from "../../../../public/sampleProfile.png";
import Icon from "../../../../public/icon.png";
import PlayBack from "../../../../public/playBack.png";
import Tomato from "../../../../public/tomato.png";
import Tree from "../../../../public/tree.png";
import { useState } from "react";

const container = [
    {
        name:'chris hemsworth',
        address:"new york,london",
        text:"You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it."
    },
    {
        name:'json smith',
        address:"lahor,pakistan",
        text:"The pizza was amazing, topped with fresh ingredients and baked to perfection. Each slice was loaded with flavor, and the crust was crispy yet soft. I’d absolutely order it again!"
    },
    {
        name:'tom hardy',
        address:"boston,america",
        text:"The park was peaceful, with tall trees providing shade and a gentle breeze. Children played joyfully while birds chirped melodiously. It’s a perfect spot to relax and enjoy nature’s beauty."
    }
]

export default function Review() {
    const [previewNum,setPreviewNum] = useState(0);

    const previewController=(condition)=>{
        const len = container.length - 1;

        if(condition == "left"){
            setPreviewNum((currentValue)=>{
                if(currentValue == 0){
                    currentValue = len;
                }else{
                    currentValue--;
                }

                return currentValue
            })
        }else{
            setPreviewNum((currentValue)=>{
                if(currentValue == len){
                    currentValue = 0
                }else{
                    currentValue++
                }

                return currentValue++;
            })
        }
    }
  return (
    <>
      <section className="w-full mt-[120px] relative overflow-hidden">
        <div className="w-[307px] h-[303px] top-[39.59px] left-[-79px] absolute smallest:left-[-140px]">
          <img
            src={Tomato}
            alt="tomato"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="w-[566.44px] h-[303.19px] absolute right-[-214.04px] top-[353.22px] rotate-[42.41deg]">
          <img src={Tree} alt="tree" className="h-full w-full object-contain" />
        </div>
        <div className="w-[1320px] mx-auto flex flex-row items-center mb-[60.14px] smallest:w-[390px] smallest:flex-col">
          <div className="w-[1168px] smallest:w-[390px]">
            <ul className=" font-robot font-bold text-[20px] leading-8 text-[#BD1F17] list-square mb-4">
              <li>Crispy, Every Bite Taste</li>
            </ul>
            <h2 className=" font-bebus font-bold text-[62px] leading-[62px] text-[#181818]">
              What Some of my Customers Say
            </h2>
          </div>

          <div className="flex flex-row gap-x-8">
            <span className="h-[60px] w-[60px] flex justify-center items-center rounded-full hover:cursor-pointer group" onClick={()=>{previewController("left")}}>
              <FaChevronLeft className="text-[18.71px] text-[#0A1425] group-hover:text-[#BD1F17]" />
            </span>
            <span className="h-[60px] w-[60px] flex justify-center items-center hover:cursor-pointer group" onClick={()=>{previewController("right")}}>
              <FaChevronRight className="text-[18.71px] text-[#0A1425] group-hover:text-[#BD1F17]"/>
            </span>
          </div>
        </div>

        <div className="w-[1320px] mx-auto smallest:w-[390px]">
          <div className="flex flex-row smallest:flex-col">

            {
                <div className="relative h-[555.69px] w-[556.45px] bg-[#FFC900] smallest:w-[390px]">
              <div className="absolute h-[411.95px] w-[386.19px] top-[71.87px] left-[85.13px]">
                <div className="flex flex-row">
                  <span className="w-[28.07px] translate-y-[-5px]">
                    <ImQuotesLeft className="text-[#0A1425]" />
                  </span>
                  <p className="w-[359.92px] font-robot font-normal text-[20px] leading-[34px] text-[#0A1425]">
                    {container[previewNum].text}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-[360.75px]">
                  <div className="flex flex-col justify-center after:content-'' after:border-[#0A1425] after:border-[1px] after:w-[360.75px] after:mt-[18px]">
                    <div className="flex flex-row justify-between w-full">
                      <div>
                        <h4 className=" font-bold font-bebus text-lg leading-[19.98px] uppercase mb-[3px]">
                          {container[previewNum].name}
                        </h4>
                        <p className=" font-normal font-robot text-sm leading-[13.32px] capitalize">
                        {container[previewNum].address}
                        </p>
                      </div>

                      <div className="h-[39.95px] w-[39.62px] rounded-full after:content-'' after:table after:h-0 after:w-[40.45px] after:border-[#BD1F17] after:border-[4px] after:mt-[18px] after:absolute after:top-[34px]">
                        <img
                          src={SampleProfile}
                          alt="profilePic"
                          className="h-full w-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="absolute h-[76.98px] w-[39.05px] bottom-[41.35px]">
                <img
                  src={Icon}
                  alt="icon"
                  className="h-full w-full object-contain"
                />
              </span>
            </div>
            }

            <div className="w-[763.6px] h-[555.97px]">
              <div className="h-full w-full">
                <img
                  src={PlayBack}
                  alt="video"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
