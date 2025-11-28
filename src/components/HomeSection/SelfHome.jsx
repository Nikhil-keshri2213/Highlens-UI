import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import WhiteBG from "../../assets/white.png";
import BlackBG from "../../assets/black.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";

const SelfHome = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around gap-10 md:gap-20 p-8 md:p-16">
      <div className="w-full md:w-[30%] mb-10">
        <CardContainer>
          <CardBody>
            <div className="bg-linear-to-br from-slate-500/30 via-black/20 to-gray-500/40 border border-white/20 rounded-3xl h-[450px] w-[350px] p-6 hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-all duration-300">
              <CardItem translateZ={100}>
                <div className="text-xl font-bold p-2 text-white">
                  SEE THINGS BEYOND LIMITS
                </div>
              </CardItem>

              <CardItem translateZ={70}>
                <div className="text-sm p-6 mb-4 text-white">
                  A UNIFIED DIGITAL ECOSYSTEM FOR PHOTOGRAPHY SERVICES.
                </div>
              </CardItem>

              <CardItem translateZ={120}>
                <img
                  src={WhiteBG}
                  alt="WhiteBG"
                  loading="lazy"
                  className="h-[80px] object-cover rounded-xl shadow-md border border-white/30"
                />
              </CardItem>

              <CardItem translateZ={120}>
                <img
                  src={BlackBG}
                  alt="BlackBG"
                  loading="lazy"
                  className="h-[70px] object-cover rounded-xl shadow-md mt-2 ml-3 border border-white"
                />
              </CardItem>

              <CardItem translateZ={80} className="mt-auto">
                <button className="w-[50%] py-4 bg-white text-black text-sm rounded-full mt-12 ml-45 font-bold cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300">
                  Explore Now
                </button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Arrow Image - Positioned between cards */}

      {/* Right Card - Content */}
      <div className="w-full md:w-[50%]">
        <img
          src={arrow1}
          alt="Arrow"
          className="hidden md:block absolute left-[47%] top-[52%] w-[200px] md:w-[250px] z-5"
        />
        <img
          src={arrow2}
          alt="Arrow"
          className="hidden md:block absolute left-[75%] top-[55%] w-[200px] md:w-[250px] z-5"
        />
        <div className="relative p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/30 border-dashed h-[450px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-slate-500/30 via-transparent to-gray-500/40 pointer-events-none rounded-2xl" />

          {/* Top Content */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-6">
              <h3 className="text-lg md:text-2xl font-bold font-stretch-50% leading-tight text-white uppercase">
                Every story begins with a single frame.
              </h3>

              <p className="text-sm md:text-base font-light text-gray-300">
                HighLens helps you capture yours with{" "}
                <span className="text-white font-medium uppercase">
                  clarity
                </span>
                ,{" "}
                <span className="text-white font-medium uppercase">
                  confidence
                </span>
                , and{" "}
                <span className="text-white font-medium uppercase">
                  creativity
                </span>
                .
              </p>
            </div>
            <div className="text-center mt-20">
              <p className="text-xl md:text-3xl font-bold uppercase text-white">
                All in one place.
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap gap-2 justify-center">
              {["Marketplace", "Learn", "Build", "Community"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold uppercase tracking-wider text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Quote */}
            <div className="text-center pt-4 border-t border-white/20">
              <p className="text-sm md:text-base font-light italic text-gray-300">
                "Your vision deserves the best tools.{" "}
                <span className="text-white font-medium">
                  HighLens delivers them.
                </span>
                "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfHome;
