import AboutImg from "../../../../public/about.png";
import CallLogo from "../../../../public/callLogo.png";
import Items1 from "../../../../public/items1.png";
import Badges from "./Badges";

export default function About() {
  return (
    <>
      <section className="w-full mt-[120px] mx-auto relative overflow-hidden">
        <div className="w-[1320px] mx-auto">
          <div className="flex flex-row w-full">
            <div className="w-[617px] mr-[79px]">
              <div className="w-[617px] h-[460px] relative">
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

            <div className="w-[624px]">
              <ul className="flex flex-row gap-x-4 font-robot text-sm font-medium border-[#B52B1D] border-t-0 border-r-0 border-l-0 border capitalize mb-8">
                <li className="py-[6px] px-4 leading-6 bg-[#B52B1D] text-white">
                  about
                </li>
                <li className="py-[6px] px-4 leading-6 text-[#333333]">
                  experience
                </li>
                <li className="py-[6px] px-4 leading-6 text-[#333333]">
                  contact
                </li>
              </ul>

              <div className="mb-[18px]">
                <h2 className="font-bebus font-bold text-[62px] leading-[62px] uppercase text-[#181818]">
                  Exceptional culinary experience and delicious food
                </h2>
              </div>

              <div className="mb-8">
                <p className=" font-robot font-normal text-base leading-[26px] text-[#333333]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
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
