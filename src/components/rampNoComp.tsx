export const RampNo: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");
  const jumpURL = decodeURIComponent(url);

  return (
    <div className=" !h-[calc(100vh-50px)] flex flex-col  justify-between items-center">
      <img src="/images/ramp.png" alt="" className=" max-h-[454px]" />
      <a
        className="bg-[#F21F7F] w-[calc(100%-40px)] m-5 mb-8 rounded-lg px-4 py-2 text-white text-base text-center"
        target="_blank"
        href={jumpURL}
      >
        Back to TOMO Telegram Wallet
      </a>
    </div>
  );
};
