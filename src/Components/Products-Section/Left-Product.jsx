function LeftProduct(Props) {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse lg:pl-[70px] lg:pr-[70px] gap-[30px] items-center overflow-hidden">
        <div className="lg:w-[48%] w-full flex justify-center">
          <a href={Props.source}>
            <img
              src={Props.lgimg}
              alt=""
              className="lg:w-[780px] lg:h-[500px] w-[300px] h-[300px]"
              data-aos="fade-right"
            />
          </a>
        </div>

        <div
          className="flex flex-col gap-[15px] lg:w-[50%] w-full items-center md:items-start"
          data-aos="fade-left"
        >
          <h1 className="lg:text-5xl text-xl text-center lg:text-start font-bold">
            {Props.heading}
          </h1>
          <p className="lg:text-[20px] text-[15px] mt-[20px] text-center lg:text-start">
            {Props.para}
          </p>
          <div className="flex gap-6 justify-center lg:justify-start">
            <img src={Props.smimg1} alt="" className="w-[80px]" />
            {Props.smimg2 && (
              <img src={Props.smimg2} alt="" className="w-[80px]" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftProduct;
