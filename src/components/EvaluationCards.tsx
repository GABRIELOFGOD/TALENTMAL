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
    <section className="max-w-[37rem] bg-[var(--talentmal-color-seven)] pt-10 pl-7 rounded-tl-[32px]">
      <img src={icon} alt="" className="w-[42px]" />
      <h2 className="text-[28px] leading-[130%] -tracking-[1px] my-2">{title}</h2>
      <p className="text-[18px] text-[var(--talentmal-color-one)] leading-[140%] -tracking-[1px] mb-3 pr-5">
        {detail}
      </p>
      <img src={image} alt="image" />
    </section>
  );
};

export default EvaluationCards;
