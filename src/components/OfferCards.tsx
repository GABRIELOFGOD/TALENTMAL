import React from "react";

interface CardProps {
  icon: string;
  title: string;
  detail: string;
}

const OfferCards: React.FC<CardProps> = ({ icon, title, detail }) => {
  return (
    <main>
      <div>
        <img src={icon} alt="" className="w-[42px]" />
        <h1 className="text-[32px] font-bold">{title}</h1>
        <p className="text-[20px] leading-[130%] -tracking-[1%]">{detail}</p>
      </div>
    </main>
  );
};

export default OfferCards;
