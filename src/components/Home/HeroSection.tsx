import bg from "../../assets/img/bg.png";
import "../../index.css";
import Imoji from "../../assets/img/🙂.png";
const HeroSection = () => {
  return (
    <div className="relativ ">
      <div
        className="relative w-[682.6755179147723px] h-[834.5184091532593px] top-[-92px]  bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-1 flex flex-col justify-center px-14   bottom-48 text-white">
          <h1 className="text-6xl font-bold mb-6 ">
            Master Crypto,<span className="block mt-5 "> Achieve Zen</span>
          </h1>
          <p className="text-2xl text-[#D9D9D9] font-normal leading-8">
            Take control of your crypto future with proven insights and
            sustainable strategies.
          </p>
          <div className="mt-10 flex items-center  space-x-6 ">
            <button className="gradient-border">
              <span>Free and VIP access</span>
            </button>

            <div className="flex gap-2 ">
              <span className="text-[#F6CA16]">Time-Limited Discount! </span>
              <img src={Imoji} alt="" className=" max-w-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
