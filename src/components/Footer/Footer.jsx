import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: RiInstagramFill,
      url: "https://www.instagram.com/highlens.official/#",
    },
    {
      icon: FaFacebook,
      url: "https://facebook.com",
    },
    {
      icon: FaSquareXTwitter,
      url: "https://twitter.com",
    },
  ];

  return (
    <div className="w-full h-fit border-t border-white/30 bg-black/20 backdrop-blur-md flex flex-col items-center justify-center gap-2 py-4">

      {/* Social Icons */}
      <div className="flex gap-10 text-4xl text-white/50">
        {socialLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer">
              <Icon className="cursor-pointer hover:text-white transition-all duration-300" />
            </a>
          );
        })}
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-4 justify-center items-center text-center">
        {["Need Help", "Career", "FAQs", "Contacts", "Privacy Policy"].map(
          (item) => (
            <span
              key={item}
              className="px-6 py-2 text-sm font-light text-gray-200 hover:bg-white/20 hover:text-white transition duration-300 cursor-pointer rounded-md"
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
