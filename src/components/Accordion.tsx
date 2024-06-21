import React, { useState } from "react";

interface AccordionProps {
  number: string;
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`p-2 my-2 cursor-pointer bg-[var(--talentmal-color-six)] ${
        isOpen ? "bg-opacity-75" : "bg-opacity-100"
      } shadow-md rounded-md`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="md:text-[18px] leading-[20px] relative flex justify-between items-center p-2">
        <div className="flex items-center gap-12">
          <p className="border bg-black text-white p-1 rounded">{number}</p>

          <h2>{title}</h2>
        </div>
        <span
          className="md:text-[18px] font-bold transform transition-transform duration-300"
          style={{
            // Rotate by 45 degrees for '+', back to 0 for '-'
            transform: `scale(${isOpen ? "1" : "1"})`,
            display: "inline-block",
            transition: "transform 0.7s ease",
          }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: "rotate(45deg)",
                transition: "transform 0.7s ease",
              }}
            >
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M18.07 9.57L12 3.5 5.93 9.57M12 20.5V3.67"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: "rotate(0deg)",
                transition: "transform 0.7s ease",
              }}
            >
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83"
              ></path>
            </svg>
          )}
        </span>
      </div>

      {isOpen && (
        <p className="text-[14px] md:text-[17px] leading-[26px] py-2 pl-[5.3rem] transition-all duration-300 ease-in-out">
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
