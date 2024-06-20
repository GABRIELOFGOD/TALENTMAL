import React from "react";

interface CardProps {
  icon: string;
  title: string;
  detail: string;
}

const OfferCards: React.FC<CardProps> = ({ icon, title, detail }) => {
  return (
    <main className="">
      <div className="lg:max-w-[31.1rem]  border-gray bg-[var(--talentmal-color-six)] rounded-[22px] p-5">
        <img src={icon} alt="" className="w-[42px]" />
        <h1 className="text-[32px] font-black -tracking-[1px] my-3">{title}</h1>
        <p className="text-[20px] leading-[130%] -tracking-[1px] text-[var(--talentmal-color-one)]">{detail}</p>
      </div>
    </main>
  );
};

export default OfferCards;
