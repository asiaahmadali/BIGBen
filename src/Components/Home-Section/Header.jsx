import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className=" text-white ml-[50px] pt-[100px] md:pt-[150px]">
      <div className="">
        <h1
          className=" text-[35px] md:text-[50px] font-medium mb-[5px] md:mb-[20px] mt-[5px] md:mt-[20px]"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Mobile Apps & Games
        </h1>
        <h6
          className=" font-normal md:font-medium text-[20px] md:text-[25px] mb-[50px]"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Developing from an idea and publishing it to final product.
        </h6>
        <button
          className="bg-yellow-500 pt-[25px] pb-[15px] pr-[50px] pl-[50px] text-black rounded-md font-medium hover:shadow shadow-yellow-800"
          data-aos="fade-in"
          data-aos-delay="1000"
          onClick={handleClick}
        >
          LETS TALK
        </button>
      </div>
    </div>
  );
}

export default Header;
