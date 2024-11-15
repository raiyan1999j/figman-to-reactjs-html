
export default function BookForm(){
    return(
        <>
            <section className="w-full bg-bookFormImg bg-cover bg-no-repeat">
                <div className="w-[1320px] mx-auto pt-[120px] smallest:w-[390px]">
                    <div className="mb-4">
                        <ul className="font-robot font-bold text-xl leading-8 text-[#BD1F17] list-square capitalize">
                            <li>
                                book now
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h2 className=" font-bebus font-bold text-[62px] leading-[62px] uppercase text-white">
                            book your table
                        </h2>
                    </div>

                    <div className="w-[545px] mb-10 smallest:w-[390px]">
                        <p className=" font-normal font-robot text-base leading-6 text-white">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                        </p>
                    </div>

                    <form>
                        <div className="w-[635px] pb-[86px] smallest:w-[390px]">
                            <div className="w-full grid grid-cols-[repeat(2,_302.5px)] gap-x-[30px] mb-6 smallest:grid-cols-1 smallest:gap-y-[30px]">
                                <div className="w-full h-[46px]">
                                    <input type="text" className="w-full h-full bg-transparent border border-white text-white pl-4 font-robot text-sm font-normal leading-[22px] placeholder:capitalize placeholder:text-white" placeholder="your name *" />
                                </div>
                                <div className="w-full h-[46px]">
                                    <input type="email" className="w-full h-full bg-transparent border border-white text-white pl-4 font-robot text-sm font-normal leading-[22px] placeholder:capitalize placeholder:text-white" placeholder="your email *" />
                                </div>
                            </div>

                            <div className="w-full grid grid-cols-[repeat(2,_302.5px)] gap-x-[30px] mb-6 smallest:grid-cols-1 smallest:gap-y-[30px]">
                                <div className="w-full h-[46px]">
                                    <input type="text" className="w-full h-full bg-transparent border border-white text-white pl-4 font-robot text-sm font-normal leading-[22px] placeholder:capitalize placeholder:text-white" placeholder="reservation date" />
                                </div>
                                <div className="w-full h-[46px]">
                                    <input type="email" className="w-full h-full bg-transparent border border-white text-white pl-4 font-robot text-sm font-normal leading-[22px] placeholder:capitalize placeholder:text-white" placeholder="total people" />
                                </div>
                            </div>

                            <div className="h-[140px] w-full mb-8">
                                <textarea className="w-full h-full bg-transparent border border-white text-white pl-4 pt-4 font-robot text-sm font-normal leading-[22px] placeholder:capitalize placeholder:text-white" placeholder="message"></textarea>
                            </div>

                            <div>
                                <button className="w-[142px] h-[56px] bg-[#FEBF00] flex justify-center items-center font-bold text-lg leading-6 font-robot uppercase text-[#0A1425]" >
                                    book now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}