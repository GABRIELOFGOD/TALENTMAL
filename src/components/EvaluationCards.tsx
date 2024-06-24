import React from "react";

interface CardProps {
  icon: string;
  title: string;
  detail: string;
  image: string;
}

const EvaluationCards: React.FC<CardProps> = ({
  icon,
  title,
  detail,
  image,
}) => {
  return (
    <section className="max-w-[37rem] bg-[var(--talentmal-color-seven)] lg:pt-10 lg:pl-7 p-4 lg:rounded-tl-[32px] rounded-tl-[14px]">
      <img src={icon} alt="" className="lg:w-[42px] w-[19px]" />
      <h2 className="text-[20px] font-medium lg:text-[28px] leading-[130%] lg:-tracking-[1px] -tracking-[0.46px] my-2">{title}</h2>
      <p className="text-[12px] lgtext-[18px] text-[var(--talentmal-color-one)] leading:[12px] lg:leading-[140%] lg:-tracking-[0.46px] mb-3 pr-5">
        {detail}
      </p>
      <img src={image} alt="image" />
    </section>
  );
};

export default EvaluationCards;
