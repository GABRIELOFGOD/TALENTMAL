import { WhyJoinProp } from "../utils/dummy";

const WhyJoinCard = ({ icon, title, body, className }: WhyJoinProp) => {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center h-fit ${className}`}
    >
      <div className="rounded-full border border-gold border-opacity-30 p-2 bg-gold bg-opacity-5 text-gold w-[42px]">
        {icon}
      </div>
      <p className="md:py-5 py-3 text-[22px] md:text-[32px] text-center font-semibold tracking-wide">
        {title}
      </p>
      <p className="md:text-xl text-[16px] text-center text-[#303030] font-medium tracking-wide">
        {body} 
      </p>
    </div>
  );
};

export default WhyJoinCard;
