function ProductLeft(Props) {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse lg:pl-[70px] lg:pr-[70px] p-[10px] gap-[30px] items-center lg:mb-[50px] mb-[10px]">
        <div className="lg:w-[40%] w-full flex justify-center">
          <img
            src={Props.lgimg}
            alt=""
            className="lg:w-[400px] lg:h-[350px] w-[300px] h-[300px]"
            data-aos="fade-down"
          />
        </div>

        <div className="flex flex-col gap-[10px] lg:w-[60%] w-full items-center lg:items-start">
          <img
            src={Props.smimg}
            alt=""
            className="w-[90px] rounded-[10px]"
            data-aos="fade-right"
          />
          <p
            className="text-orange-400 font-medium text-xl"
            data-aos="fade-right"
          >
            Mobile App
          </p>
          <h1
            className="text-2xl font-bold text-center lg:text-left"
            data-aos="fade-right"
          >
            {Props.heading}
          </h1>
          <p
            className="lg:text-[24px] text-[15px] mt-[20px] text-center lg:text-left"
            data-aos="fade-right"
          >
            {Props.para}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductLeft;
