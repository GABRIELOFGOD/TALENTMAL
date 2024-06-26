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
        <img src={icon} alt="" className="md:w-[42px] w-[27px]" />
        <h1 className="text-[20px] md:text-[32px] font-medium md:font-black md:-tracking-[1px] my-3">{title}</h1>
        <p className="text-[14px] md:text-[20px] leading-[130%]  text-[var(--talentmal-color-one)]">
          {detail}
        </p>
      </div>
    </main>
  );
};

export default OfferCards;
