import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

const Footer = () => {
  return (
    <div className="w-full h-[150px] border border-white/30 bg-black/10 backdrop-blur-md flex flex-col justify-between py-4">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl text-white">
        <FontAwesomeIcon
          icon={byPrefixAndName.fab["instagram"]}
          className="hover:text-pink-400 transition duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={byPrefixAndName.fab["facebook"]}
          className="hover:text-blue-500 transition duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={byPrefixAndName.fab["twitter"]}
          className="hover:text-sky-400 transition duration-300 cursor-pointer"
        />
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-2 justify-center items-end">
        {["Need Help", "Career", "FAQs", "Contacts", "Privacy Policy"].map(
          (item) => (
            <span
              key={item}
              className="px-5 py-2 text-sm font-semibold uppercase tracking-wider text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
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
