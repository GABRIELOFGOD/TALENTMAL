import WifiIcon from "../assets/icons/wifi-02.svg";

const Community = () => {
  return (
    <main className="h-[27.25rem] bg-black text-white flex flex-col justify-center">
      <div className="flex items-center justify-center gap-1 border rounded-full w-[12rem] mx-auto">
        <img src={WifiIcon} alt="" className="w-[20px]" />
        <p className="text-[17px]">Our community</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-[2rem]">
        <h2 className="text-[39.6px] w-[70.4rem] text-center">
          Leverage our growing community of creatives and be connected to
          oppourtunities quickly and seamlessly.
        </h2>

        <p className="text-[20px] -tracking-[0.2px] text-center mt-[2rem]">
          Join our community
        </p>
      </div>
    </main>
  );
};

export default Community;
