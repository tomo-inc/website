import { useState, useRef, useEffect } from "react";

interface IProps {
  className: string;
}
export const ConnectMenu: React.FC<IProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-1" ref={menuRef}>
      <div
        className={`cursor-pointer font-[Helvetica]  justify-center  bg-[#FE3C9C] text-white text-base p-2 px-4 rounded-md md:flex gap-1 md:w-32 h-12 items-center ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Follow us
        <img src="/images/down-arrow.svg" className="w-[14px]" />
      </div>

      <ul
        className={`absolute font-[Helvetica] p-4 mt-3 text-base left-0 mdl:w-36 w-full bg-white text-black rounded-md transition-opacity duration-300 ease-in-out transform shadow-[0_0_4px_0_rgba(0,0,0,0.12)] ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <li className="pb-[18px] hover:bg-gray-200 cursor-pointer">
          <a href="https://www.instagram.com/tomoinc/" target="_blank">
            Instagram
          </a>
        </li>
        <li className="pb-[18px] hover:bg-gray-200 cursor-pointer">
          <a href="https://x.com/tomo_social" target="_blank">
            X (Tomo Inc)
          </a>
        </li>
        <li className="pb-[18px] hover:bg-gray-200 cursor-pointer">
          <a href="https://x.com/tomo_wallet" target="_blank">
            X (Tomo Wallet)
          </a>
        </li>
        <li className="pb-[18px] hover:bg-gray-200 cursor-pointer">
          <a href="https://medium.com/tomoinc" target="_blank">
            Medium
          </a>
        </li>
        <li className="pb-[18px] hover:bg-gray-200 cursor-pointer">
          <a href="https://www.youtube.com/@Tomo_Social" target="_blank">
            YouTube
          </a>
        </li>
        <li className=" hover:bg-gray-200 cursor-pointer">
          <a href="https://t.me/tomoinc" target="_blank">
            Telegram
          </a>
        </li>
      </ul>
    </div>
  );
};
