import React from "react";

interface CardProps {
  icon: string;
  title: string;
  detail: string;
}

const OfferCards: React.FC<CardProps> = ({ icon, title, detail }) => {
  return (
    <main className="">
      <div className="lg:max-w-[31.1rem] border border-[#D7D7D7] bg-[var(--talentmal-color-six)] rounded-[22px] p-5">
        <img src={icon} alt="" className="lg:w-[42px] w-[27px]" />
        <h1 className="text-[20px] lg:text-[32px] font-medium lg:font-black lg:-tracking-[1px] my-3">{title}</h1>
        <p className="text-[13px] lg:text-[20px] leading-[130%] -tracking-[0.65px] lg:-tracking-[1px] text-[var(--talentmal-color-one)]">
          {detail}
        </p>
      </div>
    </main>
  );
};

export default OfferCards;
