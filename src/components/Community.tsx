import WifiIcon from "../assets/icons/wifi-02.svg";

const Community = () => {
  return (
    <main className="h-[27.25rem] bg-black text-white flex flex-col justify-center">
      <div className="flex items-center justify-center gap-1 border rounded-full lg:w-[12rem] px-4 lg:px-0 py-2 lg:py-0 mx-auto">
        <img src={WifiIcon} alt="" className="w-[20px]" />
        <p className="text-[17px]">Our community</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-[2rem]">
        <h2 className="lg:text-[39.6px] hidden lg:block lg:w-[70.4rem] text-center">
          Leverage our growing community of creatives and be connected to
          oppourtunities quickly and seamlessly.
        </h2>
        <h2 className="lg:hidden block text-[24px] tracking-[-1px] text-center">
          Leverage our growing community <br /> of creatives and be connected to <br />
          oppourtunities quickly and <br /> seamlessly.
        </h2>

        <p className="text-[20px] -tracking-[0.2px] text-center mt-[2rem]">
          Join our community
        </p>
      </div>
    </main>
  );
};

export default Community;
