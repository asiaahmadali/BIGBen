function RightProduct(Props) {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:pl-[70px] md:pr-[70px] lg:gap-0 gap-[20px] items-center overflow-hidden">
        <div
          className="flex flex-col gap-[20px] lg:w-[50%] w-full items-center lg:items-start"
          data-aos="fade-right"
        >
          <h1 className="lg:text-5xl text-xl lg:text-start text-center font-bold mt-[10px]">
            {Props.heading}
          </h1>
          <p className="lg:text-[24px] text-[15px] mt-[20px] text-center lg:text-start">
            {Props.para}
          </p>
          <div className="flex gap-6 justify-center lg:justify-start">
            <img src={Props.smimg1} alt="" className="w-[80px]" />
            {Props.smimg2 && (
              <img src={Props.smimg2} alt="" className="w-[80px]" />
            )}
          </div>
        </div>
        <div className="lg:w-[55%] w-full flex justify-center">
          <a href={Props.source}>
            <img
              src={Props.lgimg}
              alt=""
              className="lg:w-[780px] lg:h-[500px] w-[300px] h-[300px]"
              data-aos="fade-left"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default RightProduct;
