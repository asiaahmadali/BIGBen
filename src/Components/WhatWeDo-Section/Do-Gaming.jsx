function DoGaming() {
  return (
    <>
      <div className="p-[10px] lg:p-[70px] flex lg:flex-row flex-col gap-[30px]  items-center overflow-hidden">
        <div
          className="flex flex-col gap-8 items-center lg:items-start"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <h1 className="text-orange-400 lg:text-5xl text-xl font-bold">
            Gaming
          </h1>
          <p className="lg:text-[26px] text-[16px]">
            Mobile gaming is a rapidly growing industry with a global reach,
            encompassing a wide range of game genres and business models.
          </p>

          {/* gaming points */}

          <div className="flex flex-col">
            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className="lg:text-2xl text-[16px] font-medium mt-4 ">
                Qualitative & Purposeful Fun while fulfilling Futuristic
                Entertainment Advancements
              </div>
            </div>

            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className=" lg:text-2xl text-[16px]  font-medium mt-4 ">
                Gaming is the booming industry & is the No. 1 source of
                entertainment for younger generations
              </div>
            </div>

            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className=" lg:text-2xl text-[16px]  font-medium mt-4">
                Mobile First Technology
              </div>
            </div>

            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  4
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className=" lg:text-2xl text-[16px]  font-medium mt-4 ">
                Future expansion covering all Major Gaming Platforms i.e. PC,
                Console etc.
              </div>
            </div>
          </div>

          {/* image */}
        </div>
        <div className="lg:w-[60%] w-[90%] flex items-center justify-center">
          <img
            src="images/do1.webp"
            alt=""
            className="rounded-md lg:w-[780px] lg:h-[550px] w-[300px] "
            data-aos="fade-left"
          />
        </div>
      </div>
    </>
  );
}

export default DoGaming;
