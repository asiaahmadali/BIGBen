import { useState } from "react";

function UpcomingProducts() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="p-[50px]">
        <p className="text-center text-gray-500 text-[15px] md:text-[20px]">
          Our Upcoming Products
        </p>
        <p
          className="text-[17px] md:text-[32px] font-medium text-center mt-[20px]"
          data-aos="fade-down"
        >
          We are a startup focused on developing and publishing innovative
          mobile apps both gaming and non-gaming. We create experiences with our
          users and quality at the heart of everything we do.
        </p>
      </div>

      {/* upcoming projects div */}
      <div className="bg-[#f5f5dc] md:flex md:justify-around p-[10px] md:p-[40px] mt-[20px] grid grid-cols-2 gap-[10px] ">
        <a href="https://play.google.com/store/apps/details?id=com.bgs.hungry.shark.games.shark.world">
          <div
            className={` md:pt-[20px] md:pl-[40px] rounded-lg md:pr-[40px] mb-[20px] md:pb-[10px] p-[10px] cursor-pointer flex justify-center ${
              hoveredIndex === 0 ? "bg-white" : "bg-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[100px] md:w-[150px] flex flex-col justify-center">
              <img
                src="images/shark.webp"
                alt=""
                className="md:w-[150px] md:h-[150px] rounded-lg mb-[20px] w-[90px] h-[80px]"
              />
              <h1 className="font-medium md:text-2xl text-center text-[15px]">
                Shark Hunting
              </h1>
            </div>
          </div>
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.bgs.mother.simulator.games.family.life.game.mom.dad">
          <div
            className={`md:pt-[20px] md:pl-[40px] rounded-lg md:pr-[40px] mb-[20px] md:pb-[10px] p-[10px] flex justify-center cursor-pointer ${
              hoveredIndex === 1 ? "bg-white" : "bg-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[100px] md:w-[150px] flex flex-col justify-center">
              <img
                src="images/momlife.webp"
                alt=""
                className="md:w-[150px] md:h-[150px] rounded-lg mb-[20px] w-[90px] h-[80px]"
              />
              <h1 className="font-medium md:text-2xl text-center text-[15px]">
                Mom Sim Game
              </h1>
            </div>
          </div>
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.bgs.school.life.love.story.anime.games">
          <div
            className={`md:pt-[20px] md:pl-[40px] rounded-lg md:pr-[40px] mb-[20px] md:pb-[10px] p-[10px] cursor-pointer flex justify-center ${
              hoveredIndex === 2 ? "bg-white" : "bg-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[100px] md:w-[150px] flex flex-col justify-center">
              <img
                src="images/schoollife.webp"
                alt=""
                className="md:w-[150px] md:h-[150px] rounded-lg mb-[20px] w-[90px] h-[80px]"
              />
              <h1 className="font-medium md:text-2xl text-center text-[15px]">
                School Love Life Game
              </h1>
            </div>
          </div>
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.bgs.soccer.match.football.games.offline">
          <div
            className={`md:pt-[20px] md:pl-[40px] md:pr-[40px] rounded-lg mb-[20px] md:pb-[10px] p-[10px] cursor-pointer flex justify-center ${
              hoveredIndex === 3 ? "bg-white" : "bg-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[100px] md:w-[150px] flex flex-col justify-center">
              <img
                src="images/football.webp"
                alt=""
                className="md:w-[150px] md:h-[150px] rounded-lg mb-[20px] w-[90px] h-[80px]"
              />
              <h1 className="font-medium md:text-2xl text-center text-[15px]">
                Football Match Game
              </h1>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default UpcomingProducts;
