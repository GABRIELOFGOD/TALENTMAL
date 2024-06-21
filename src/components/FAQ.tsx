import React, { useEffect } from "react";
import Accordion from "./Accordion";

const FAQ: React.FC = () => {
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const btn = document.querySelector(".btn") as HTMLElement | null;
      if (btn) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <main>
      <section>
        <h1 className="text-[32px] font-medium lg:text-[56px] leading-[120%] -tracking-[2px]">FAQs</h1>
        <p className="text-[18px] leading-[130%] -tracking-[1px] text-[var(--talentmal-color-three)] my-3">
          If you don’t find any question you’re looking for. You can send us
          your question
        </p>
        <button className="border text-[16px] lg:text-[17px] text-[var(--talentmal-color-nine)] px-4 py-2 rounded-full">SEND US A QUESTION</button>
      </section>

      {/* ACCORDION DIV */}
      <section className="w-full mt-[2rem] space-y-5 lg:space-y-0">
        <Accordion
          number="01"
          title="If you don’t find any question you’re looking for. You can send us your question?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
        />
        <Accordion
          number="02"
          title="If you don’t find any question you’re looking for. You can send us your question?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
        />
        <Accordion
          number="03"
          title="If you don’t find any question you’re looking for. You can send us your question?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
        />
        <Accordion
          number="04"
          title="If you don’t find any question you’re looking for. You can send us your question?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
        />
        <Accordion
          number="05"
          title="If you don’t find any question you’re looking for. You can send us your question?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus molestiae officia quibusdam repellendus iure rem eaque rerum pariatur molestias."
        />
      </section>
    </main>
  );
};

export default FAQ;
