import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-[200px] border-t border-white/30 bg-black/20 backdrop-blur-md flex flex-col items-center justify-center gap-6 py-6">

      {/* Social Icons */}
      <div className="flex justify-center gap-10 text-4xl text-white">
        {[RiInstagramFill, FaFacebook, FaSquareXTwitter].map((Icon, idx) => (
          <Icon
            key={idx}
            className="cursor-pointer"
          />
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-4 justify-center items-center text-center">
        {["Need Help", "Career", "FAQs", "Contacts", "Privacy Policy"].map(
          (item) => (
            <span
              key={item}
              className="px-6 py-2 text-base font-semibold uppercase tracking-widest text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
