import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { TfiQuoteLeft } from "react-icons/tfi";
import WhiteBG from "../../assets/white.png";
import BlackBG from "../../assets/black.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";

const IntroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around p-6 md:p-8 gap-10 md:gap-20">

      {/* LEFT CARD */}
      <div className="w-full md:w-[30%] flex ml-10 md:ml-0 md:justify-start">
        <CardContainer>
          <CardBody>
            <div
              className="
                bg-linear-to-br from-slate-500/30 via-black/20 to-gray-500/40 
                border border-white/20 
                rounded-3xl 
                h-[400px] 
                w-[90%] sm:w-[350px] md:w-[400px] 
                p-6 
                hover:shadow-[0_0_15px_rgba(255,255,255,1)] 
                hover:bg-linear-to-br hover:from-[#355C7D] hover:via-[#6C5B7B] hover:to-[#C06C84] 
                hover:text-black 
                transition duration-300
              "
            >
              <CardItem translateZ={70}>
                <div className="text-xl sm:text-xl font-bold text-white leading-tight text-center">
                  <TfiQuoteLeft className="text-2xl sm:text-3xl inline-block mr-2 mb-5" />
                  SEE THINGS BEYOND LIMITS
                </div>
              </CardItem>

              <CardItem translateZ={100}>
                <div className="text-xs sm:text-sm mt-5 text-white text-center font-light">
                  A UNIFIED DIGITAL ECOSYSTEM FOR PHOTOGRAPHY SERVICES.
                </div>
              </CardItem>

              <CardItem translateZ={110}>
                <img
                  src={WhiteBG}
                  alt="WhiteBG"
                  loading="lazy"
                  className="h-[60px] object-cover rounded-xl mt-5 shadow-md border border-white/30"
                />
              </CardItem>

              <CardItem translateZ={100}>
                <img
                  src={BlackBG}
                  alt="BlackBG"
                  loading="lazy"
                  className="h-[60px] object-cover rounded-xl shadow-md mt-2 ml-3 border border-white"
                />
              </CardItem>

              {/* ⚠ NO POSITION CHANGES – BUTTON EXACTLY WHERE YOU PLACED IT */}
              <CardItem translateZ={80} className="mt-auto">
                <button
                  className="
                    w-full md:w-[50%] py-2 bg-white text-black text-sm rounded-full 
                    mt-10 ml-18 md:ml-50 font-bold cursor-pointer 
                    hover:shadow-[0_0_25px_rgba(200,200,200,1)] 
                    transition duration-300">
                  Explore Now
                </button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* RIGHT CONTENT CARD */}
      <div className="w-full md:w-[50%]">
        <div
          className="
            relative p-6 sm:p-8 rounded-2xl 
            bg-black/30 backdrop-blur-sm 
            h-auto md:h-[450px] 
            flex flex-col justify-between 
            overflow-hidden">

          {/* Desktop arrows */}
          <img
            src={arrow1}
            alt="Arrow"
            className="
                absolute left-[5px] top-40 
                w-[120px] sm:w-40 md:w-[200px] lg:w-[250px]
                opacity-90
                pointer-events-none"/>
          <img
            src={arrow2}
            alt="Arrow"
            className="
              absolute right-[5px] top-[180px] md:top-[200px]
              w-[120px] sm:w-40 md:w-[200px] lg:w-[250px]
              opacity-90
              pointer-events-none"/>

          <div className="absolute inset-0 bg-linear-to-br from-slate-500/30 via-transparent to-gray-500/40 pointer-events-none rounded-2xl" />

          {/* TOP CONTENT */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-5">
              <h3 className="text-lg md:text-2xl font-bold leading-tight text-white uppercase">
                Every story begins with a single frame.
              </h3>

              <p className="text-sm md:text-base font-light text-gray-300">
                HighLens helps you capture yours with{" "}
                <span className="text-white font-medium uppercase">clarity</span>,{" "}
                <span className="text-white font-medium uppercase">confidence</span>, and{" "}
                <span className="text-white font-medium uppercase">creativity</span>.
              </p>
            </div>

            <div className="text-center mt-10 md:mt-20 mb-6 md:mb-0">
              <p className="text-xl md:text-3xl font-bold uppercase text-white">
                All in one place.
              </p>
            </div>

          </div>

          {/* BOTTOM CONTENT */}
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap gap-2 justify-center">
              {["Blog", "Marketplace", "Learn", "Build", "Community"].map(
                (item) => (
                  <span
                    key={item}
                    className="
                      px-5 py-2 
                      bg-white/10 backdrop-blur-sm 
                      border border-white/30 
                      rounded-full 
                      text-sm font-semibold uppercase tracking-wider text-gray-200 
                      hover:bg-linear-to-br hover:from-[#355C7D] hover:via-[#6C5B7B] hover:to-[#C06C84] 
                      hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,1)] 
                      transition duration-300 cursor-default
                    "
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="text-center pt-4 border-t border-white/20">
              <p className="text-sm md:text-base font-light italic text-gray-300">
                "Your vision deserves the best tools.{" "}
                <span className="text-white font-medium">HighLens delivers them.</span>"
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IntroSection;
