import LeftProduct from "./Left-Product";
import RightProduct from "./Right-Product";

function AllProducts() {
  //        headings
  const heading1 = "Angry Shark Revenge Shark Game";
  const heading2 = "Mom Life Mother Simulator Game";
  const heading3 = "Prado Jeep Parking";
  const heading4 = "City Car Driving";
  const heading5 = "Soccer Match 3D Football Games";
  const heading6 = "Vegas Gangster Crime World Sim";
  const heading7 = "Deer Hunting: FPS Sniper Games";

  // pages resourse

  const source1 =
    "https://play.google.com/store/apps/details?id=com.bgs.hungry.shark.games.shark.world";
  const source2 =
    "https://play.google.com/store/apps/details?id=com.bgs.mother.simulator.games.family.life.game.mom.dad";
  const source3 =
    "https://play.google.com/store/apps/details?id=com.bgs.prado.jeep.parking.car.games.offline";
  const source4 =
    "https://play.google.com/store/apps/details?id=com.bgs.car.racing.game.stunt";
  const source5 =
    "https://play.google.com/store/apps/details?id=com.bgs.soccer.match.football.games.offline";
  const source6 =
    "https://play.google.com/store/apps/details?id=com.bgs.vegas.gangster.sim.crime.world.games";
  const source7 =
    "https://play.google.com/store/apps/details?id=com.bgs.deer.hunting.sniper.shooting.games";

  //       paragraphs
  const para1 =
    "Did you ever imagine hunting an angry shark? Sharks are not hunted easily in fish games. The dream of hunting fish can become true in shark games. Diving deep in the ocean is dangerous in shark hunting games. Use an antique boat in a shark simulator and fish hunting games. No need to fasten seat belts on the boat for safety in shark games. ";

  const para2 =
    "Welcome to Mother Simulator, where you can step into the role of a devoted mom and experience the everyday joys and challenges of parenthood. In this engaging game, you will care for your virtual son or daughter. ";

  const para3 =
    "Welcome to the luxury Prado parking driver in the modern Jeep Wala game. The Prado Jeep game trains you how to become a master in the parking driving game. Polish their parking skills in the jeep simulator game. Smooth controls in the Prado driving game. Prado car offers a challenging level in the jeep parking game. ";

  const para4 =
    "Start the fire engine of the car simulator you need to ignite stunt driving of real car racing games. Buckle up as a racing master, because car stunts in a mobile race of car games are more than a thrill traffic ride.";

  const para5 =
    "Do you want to play in the Super Cup as a football striker or the manager of football games? Mini soccer games offline check your stamina in these soccer leagues of the World Cup. Score soccer goals with a team of eleven in this offline football game. Compete world-class soccer teams in these football games.";

  const para6 =
    "Do not dare to commit a real gangster theft in fighting games. Practice fps shooting in a world of crime simulators and shooting games. Having a mad gangster crime shooting simulator, led you to the dark vice crime in a grand city of action games. ";

  const para7 =
    "Wild animals like deer hunting are difficult in the jungle games. Sniper hunting is adventurous for deer shooters in the sniper hunting of deer games. Use sniper guns as a stag hunter in deer hunting clash of sniper shooting games. A deer hunter may have to chase stag in big buck and animal hunting games. ";

  return (
    <>
      <div className="md:pl-[70px] md:pr-[70px] overflow-hidden">
        <LeftProduct
          para={para1}
          heading={heading1}
          lgimg="images/angry-shark.webp"
          smimg1="images/playstore.webp"
          smimg2="images/at-icon.webp"
          source={source1}
        ></LeftProduct>
        <RightProduct
          para={para2}
          heading={heading2}
          lgimg="images/mother.webp"
          smimg1="images/playstore.webp"
          smimg2="images/at-icon.webp"
          source={source2}
        ></RightProduct>
        <LeftProduct
          para={para3}
          heading={heading3}
          lgimg="images/prado.png"
          smimg1="images/playstore.webp"
          source={source3}
        ></LeftProduct>
        <RightProduct
          para={para4}
          heading={heading4}
          lgimg="images/car.webp"
          smimg1="images/playstore.webp"
          smimg2="images/at-icon.webp"
          source={source4}
        ></RightProduct>
        <LeftProduct
          para={para5}
          heading={heading5}
          lgimg="images/football2.webp"
          smimg1="images/playstore.webp"
          source={source5}
        ></LeftProduct>
        <RightProduct
          para={para6}
          heading={heading6}
          lgimg="images/crime.webp"
          smimg1="images/playstore.webp"
          source={source6}
        ></RightProduct>
        <LeftProduct
          para={para7}
          heading={heading7}
          lgimg="images/hunter.webp"
          smimg1="images/playstore.webp"
          source={source7}
        ></LeftProduct>
      </div>
    </>
  );
}

export default AllProducts;
