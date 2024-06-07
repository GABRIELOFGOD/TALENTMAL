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
    <section className="w-[48rem] bg-[var(--talentmal-color-seven)] pt-10 pl-10 rounded-tl-[32px]">
      <img src={icon} alt="" className="w-[42px]" />
      <h2 className="text-[28px] leading-[130%] -tracking-[1px] my-3">{title}</h2>
      <p className="text-[20px] text-[var(--talentmal-color-one)] leading-[140%] -tracking-[1px] mb-3 w-[687px]">
        {detail}
      </p>
      <img src={image} alt="image" />
    </section>
  );
};

export default EvaluationCards;
