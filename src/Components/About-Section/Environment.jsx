function Environment() {
  return (
    <>
      <div className="lg:p-[70px] p-[10px] bg-pink-50 lg:pb-[70px] overflow-hidden">
        <div>
          <h1 className="text-center font-bold lg:text-4xl text-2xl mb-3">
            {" "}
            Environment
          </h1>
          <p
            className="text-center text-gray-400 lg:text-[20px] text-[15px]"
            data-aos="fade-right"
          >
            Striving for a green planet through net zero
          </p>
        </div>

        {/*   env cards */}

        <div className="lg:flex gap-[20px] mt-[50px] grid grid-cols-2 place-items-center">
          <div className="bg-white p-[20px] flex flex-col items-center justify-center lg:gap-[25px] gap-[20px] lg:w-[280px] lg:h-[250px] w-[160px] h-[200px]">
            <img src="images/env1.svg" alt="" />
            <h1 className="lg:font-bold lg:text-xl text-center text-[16px] font-medium">
              Plantation Drives
            </h1>
          </div>

          <div className="bg-white p-[20px] flex flex-col items-center justify-center lg:gap-[25px] gap-[20px] lg:w-[280px] lg:h-[250px] w-[160px] h-[200px]">
            <img src="images/env2.svg" alt="" />
            <h1 className="lg:font-bold lg:text-xl text-center text-[16px] font-medium">
              Paper & Plastic Free
            </h1>
          </div>

          <div className="bg-white p-[20px] flex flex-col items-center justify-center lg:gap-[25px] gap-[20px] lg:w-[280px] lg:h-[250px] w-[160px] h-[200px]">
            <img src="images/env3.svg" alt="" />
            <h1 className="lg:font-bold lg:text-xl text-center text-[16px] font-medium">
              Reduced Carbon Emissions
            </h1>
          </div>

          <div className="bg-white p-[20px] flex flex-col items-center justify-center lg:gap-[25px] gap-[20px] lg:w-[280px] lg:h-[250px] w-[160px] h-[200px]">
            <img src="images/env4.svg" alt="" />
            <h1 className="lg:font-bold lg:text-xl text-center text-[16px] font-medium">
              Renewable Energy Sources
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Environment;
