import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FoodItems1 from "../../../../public/foodItems1.png";
import FoodItems2 from "../../../../public/foodItems2.png";
import FoodItems3 from "../../../../public/foodItems3.png";
import FoodItems4 from "../../../../public/foodItems4.png";
import Items1 from "../../../../public/items1.png";
import { useEffect, useState } from "react";

const productList = [
  [
    {
      image: FoodItems1,
      heading: "vegetables burger",
      text: "Barbecue Italian cuisine pizza",
    },
    {
      image: FoodItems2,
      heading: "Spacial Pizza",
      text: "Barbecue Italian cuisine pizza",
    },
    {
      image: FoodItems3,
      heading: "Spacial French fries",
      text: "Barbecue Italian cuisine",
    },
    {
      image: FoodItems4,
      heading: "Cuisine Chicken",
      text: "Japanese Cuisine Chicken",
    },
  ],
  [
    {
      image: FoodItems2,
      heading: "Spacial Pizza",
      text: "Barbecue Italian cuisine pizza",
    },
    {
      image: FoodItems4,
      heading: "Cuisine Chicken",
      text: "Japanese Cuisine Chicken",
    },
    {
      image: FoodItems1,
      heading: "vegetables burger",
      text: "Barbecue Italian cuisine pizza",
    },
    {
      image: FoodItems3,
      heading: "Spacial French fries",
      text: "Barbecue Italian cuisine",
    },
  ],
  [
    {
      image: FoodItems1,
      heading: "vegetables burger",
      text: "Barbecue Italian cuisine pizza",
    },
    {
      image: FoodItems3,
      heading: "Spacial French fries",
      text: "Barbecue Italian cuisine",
    },
    {
      image: FoodItems4,
      heading: "Cuisine Chicken",
      text: "Japanese Cuisine Chicken",
    },
    {
      image: FoodItems2,
      heading: "Spacial Pizza",
      text: "Barbecue Italian cuisine pizza",
    },
  ],
];

export default function Products() {
  const [productArr, setProductArr] = useState(0);
  const [carousel,setCarousel] = useState(true);


  const carouselControl=(condition)=>{
    const len = productList.length - 1;

    if(condition=="left"){
        setProductArr((currentValue)=>{
            if(currentValue == 0){
                currentValue = len;
            }else{
                currentValue--
            }

            return currentValue;
        })
    }else{
        setProductArr((currentValue)=>{
            if(currentValue == len){
                currentValue = 0;
            }else{
                currentValue++
            }

            return currentValue;
        })
    }
  }
  useEffect(() => {
    const len = productList.length - 1;
    const productInterval = setInterval(() => {
      setProductArr((currentValue) => {
        if (currentValue == len) {
          currentValue = 0;
        } else {
          currentValue++;
        }
        return currentValue;
      });
      setCarousel(false)
    }, 5000);
    return () => {
      clearInterval(productInterval);
    };
  }, []);

  useEffect(()=>{
    if(!carousel){
        setCarousel(true)
    }
  },[carousel])
  return (
    <>
      <section className="w-full mt-[130px] bg-[#FBF7F2] py-[120px] relative smallest:w-[390px]">
        <div className="absolute h-[492.04px] w-[526.31px] top-[211px] left-[-372px] rotate-[-72deg] smallest:w-[390px]">
          <img
            src={Items1}
            alt="items2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[1320px] mx-auto mb-4 smallest:w-[390px]">
          <div>
            <ul className=" font-robot font-bold text-xl leading-8 text-[#BD1F17] list-square">
              <li>Crispy, Every Bite Taste</li>
            </ul>
          </div>
        </div>

        <div className="w-[1320px] mx-auto smallest:w-[390px]">
          <div className="flex flex-row w-full items-center smallest:flex-col">
            <div className="w-[1168px] smallest:w-[390px]">
              <h3 className=" font-bebus font-bold text-[62px] leading-[62px] text-[#181818]">
                POPULAR FOOD ITEMS
              </h3>
            </div>

            <div className="flex flex-row gap-x-8">
              <span className="h-[60px] w-[60px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A] hover:cursor-pointer group" onClick={()=>{carouselControl("left")}}>
                <FaChevronLeft className="text-[18.71px] text-[#0A1425] group-hover:text-[#BD1F17]"  />
              </span>
              <span className="h-[60px] w-[60px] rounded-full flex justify-center items-center shadow-xl shadow-[#0000001A] hover:cursor-pointer group" onClick={()=>{carouselControl("right")}}>
                <FaChevronRight className="text-[18.71px] text-[#0A1425] group-hover:text-[#BD1F17]" />
              </span>
            </div>
          </div>
        </div>

        <div className="w-[1320px] mx-auto mt-[60px] overflow-hidden smallest:w-[390px]">
          <div className="grid grid-cols-[repeat(4,_306px)] gap-x-8 smallest:grid-cols-1">
            {
                productList[productArr].map((items,index)=>{
                    return <div className={`bg-white flex flex-col items-center ${carousel?"animate-fadeInRight":""}`} key={index}>
              <div className="h-[124px] w-[186px] pt-[30px] ">
                <img
                  src={items.image}
                  alt="burger"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="h-1 w-[57px] bg-[#BD1F17] mt-[22px]"></span>
              <div className="mt-6 w-[242px] text-center pb-8">
                <h4 className=" font-bebus font-bold text-2xl leading-9 text-[#0A1425] uppercase">
                  {items.heading}
                </h4>
                <p className=" font-normal text-base leading-8 font-robot tracking-[-1.5%] text-[#0A1425]">
                  {items.text}
                </p>
              </div>
                    </div>
                })
            }
          </div>
        </div>
      </section>
    </>
  );
}
