import { useState } from "react";
import AboutImg from "../../../../public/about.png";
import CallLogo from "../../../../public/callLogo.png";
import Items1 from "../../../../public/items1.png";
import Badges from "./Badges";

const container=[
  {
    opt:"about",
    heading:"Exceptional culinary experience and delicious food",
    message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation"
  },
  {
    opt:"experience",
    heading:"Tasty dishes, cozy ambiance, exceptional service",
    message:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    opt:"contact",
    heading:"Fresh ingredients, warm atmosphere, unforgettable flavors",
    message:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed"
  }
]

export default function About() {
  const [option,setOption] = useState(0);

  const selectTab =(menu)=>{
    const step1 = container.findIndex(items=>items.opt == menu);

    setOption(step1);
  }
  return (
    <>
      <section className="w-full mt-[120px] mx-auto relative overflow-hidden">
        <div className="w-[1320px] mx-auto smallest:w-[390px]">
          <div className="flex flex-row w-full smallest:w-[390px] smallest:flex-col">
            <div className="w-[617px] mr-[79px] smallest:w-[390px]">
              <div className="w-[617px] h-[460px] relative smallest:w-[390px]">
                <div className="h-full w-full absolute top-0 left-0">
                  <img
                    src={AboutImg}
                    alt="aboutImg"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute w-[241.17px] bg-white rounded-[20px] shadow-xl shadow-[#5F5F5F40] flex justify-center items-center pt-[22.21px] pr-[21.14px] pl-[22.53px] pb-[20.33px] top-[30.25px] left-6">
                  <div className="w-[197.5px] flex flex-row items-center">
                    <div className="relative w-[94.21px] h-[94.21px] bg-progressBar rounded-full after:content-'' after:table after:h-[16.38px] after:w-[16.38px] after:rounded-full after:border-[4px] after:border-[#FEBF00] after:absolute after:top-[21px] after:left-[-2px] after:bg-white mr-[10.29px]">
                      <div className="absolute h-full w-full flex justify-center items-center">
                        <span className="font-open font-bold text-[26px] leading-[30.16px] text-[#181818]">
                          50%
                        </span>
                      </div>
                    </div>

                    <div className="w-[93px]">
                      <h4 className=" font-open font-semibold text-base leading-[23.6px] text-[#181818]">
                        Market Experiences
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[624px] smallest:w-[390px]">
              <ul className="flex flex-row gap-x-4 font-robot text-sm font-medium border-[#B52B1D] border-t-0 border-r-0 border-l-0 border capitalize mb-8">
                {
                  container.map((items,index)=>{
                    return <li className={`py-[6px] px-4 leading-6  hover:cursor-pointer transition-all duration-200 ease-in hover:bg-[#B52B1D] hover:text-white ${option == index?"bg-[#B52B1D] text-white":"bg-transparent text-[#333333]"}`} onClick={()=>{selectTab(items.opt)}} key={index}>
                      {items.opt}
                    </li>
                  })
                }
              </ul>

              <div className="mb-[18px]">
                <h2 className="font-bebus font-bold text-[62px] leading-[62px] uppercase text-[#181818]">
                  {container[option].heading}
                </h2>
              </div>

              <div className="mb-8">
                <p className=" font-robot font-normal text-base leading-[26px] text-[#333333]">
                  {
                    container[option].message
                  }
                </p>
              </div>

              <div className="flex flex-row items-center">
                <div className="mr-8">
                  <button className=" font-robot font-bold text-lg leading-6 uppercase text-[#0A1425] w-[161px] h-[56px] flex justify-center items-center bg-[#FEBF00]">
                    about more
                  </button>
                </div>

                <div className="flex flex-row">
                  <span className="h-6 w-6 mr-2">
                    <img
                      src={CallLogo}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className=" font-bold text-lg leading-6 font-robot text-[#0A1425]">
                    +88 3426 739 485
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Badges />

        <div className=" w-[363.84px] h-[340.14px] absolute left-[1689.82px] top-[300.82px] rotate-[-24.95deg]">
          <img
            src={Items1}
            alt="foodItem"
            className="h-full w-full object-contain"
          />
        </div>
      </section>
    </>
  );
}
