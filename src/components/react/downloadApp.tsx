import { useState, useRef, useEffect } from "react";

interface IProps {
  className?: string;
}
export const DownloadApp: React.FC<IProps> = ({ className }) => {
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
        className={`cursor-pointer font-[Helvetica] font-semibold  justify-center  bg-[#F21F7F] text-white text-base p-4 rounded-md w-44  text-center  ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Download App
      </div>

      <ul
        className={`absolute font-[Helvetica] z-30  mt-6 text-base right-0  w-full text-black rounded-md transition-opacity duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <li className="pb-4 rounded-[6px]">
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=tomo.app.unyx"
          >
            <img
              className=" shadow-lg rounded-[6px] max-w-[179px] max-h-[44px] md:max-w-[unset] md:max-h-[unset] md:w-[179px] md:h-[48px]"
              src="/images/google-play2.svg"
              alt=""
            />
          </a>
        </li>
        <li className="pb-4">
          <a
            className="cursor-pointer "
            target="_blank"
            href="https://apps.apple.com/us/app/tomo-inc/id6468010287"
          >
            <img
              className=" shadow-lg rounded-[6px] max-w-[179px] max-h-[44px] md:max-w-[unset] md:max-h-[unset] md:w-[179px] md:h-[48px]"
              src="/images/app-store2.svg"
              alt="app store"
            />
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://pub-6c52100fa9ac41f681f0713eac878541.r2.dev/app-prod-release.apk"
          >
            <img
              className=" shadow-lg rounded-[6px] max-w-[179px] max-h-[44px] md:max-w-[unset] md:max-h-[unset] md:w-[179px] md:h-[48px]"
              src="/images/android2.svg"
              alt="apk"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
