import ProductRight from "./Product-Right";
import ProductLeft from "./Product-Left";

function ProductIdeas() {
  const p1 =
    "Did you ever imagine hunting an angry shark? Sharks are not hunted easily in fish games. The dream of hunting fish can become true in shark games. Diving deep in the ocean is dangerous in shark hunting games. ";

  const p2 =
    "Welcome to Mother Simulator, where you can step into the role of a devoted mom and experience the everyday joys and challenges of parenthood. In this engaging game, you will care for your virtual son or daughter. ";

  const p3 =
    "Welcome to the luxury Prado parking driver in the modern Jeep Wala game. The Prado Jeep game trains you how to become a master in the parking driving game. Polish their parking skills in the jeep simulator game.  ";

  const p4 =
    "Start the fire engine of the car simulator you need to ignite stunt driving of real car racing games. Buckle up as a racing master, because car stunts in a mobile race of car games are more than a thrill traffic ride.";

  const p5 =
    "Do you want to play in the Super Cup as a football striker or the manager of football games? Mini soccer games offline check your stamina in these soccer leagues of the World Cup. Score soccer goals with a team of eleven.";

  const p6 =
    "Do not dare to commit a real gangster theft in fighting games. Practice fps shooting in a world of crime simulators and shooting games. Having a mad gangster crime shooting simulator, led you to the dark vice crime in a grand city of action games. ";

  // headins

  const heading1 = "Angry Shark Revenge Shark";
  const heading2 = "Mom Life Mother Simulator";
  const heading3 = "Prado Jeep Parking";
  const heading4 = "City Car Driving";
  const heading5 = "Soccer Match 3D Football";
  const heading6 = "Vegas Gangster Crime World";

  // sm-images links

  return (
    <>
      <div className="p-[20px] bg-gray-100">
        <div>
          <h1
            className="font-bold md:font-medium md:text-5xl text-center md:p-[70px] text-xl p-[10px]"
            data-aos="fade-down"
          >
            We love transforming product ideas into degital realities
          </h1>
        </div>

        {/* product 1 */}

        <ProductRight
          smimg="images/p1-s.webp"
          heading={heading1}
          para={p1}
          lgimg="images/lg-shark.webp"
        ></ProductRight>

        {/* peoduct 2 */}

        <ProductLeft
          smimg="images/p2-s.webp"
          heading={heading2}
          para={p2}
          lgimg="images/lg-mom.webp"
        ></ProductLeft>

        {/* product 3 */}

        <ProductRight
          smimg="images/p3-s.webp"
          heading={heading3}
          para={p3}
          lgimg="images/prado.png"
        ></ProductRight>

        {/* peoduct 4 */}

        <ProductLeft
          smimg="images/p4-s.webp"
          heading={heading4}
          para={p4}
          lgimg="images/lg-car.webp"
        ></ProductLeft>

        {/* product 5 */}

        <ProductRight
          smimg="images/p5-s.webp"
          heading={heading5}
          para={p5}
          lgimg="images/lg-football.webp"
        ></ProductRight>

        {/* peoduct 6 */}

        <ProductLeft
          smimg="images/p6-s.webp"
          heading={heading6}
          para={p6}
          lgimg="images/lg-crime.webp"
        ></ProductLeft>
      </div>
    </>
  );
}

export default ProductIdeas;
