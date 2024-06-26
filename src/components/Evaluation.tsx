import EvaluationCards from "./EvaluationCards";
import Icon from "../assets/icons/tv.svg";
import CardIcon1 from "../assets/icons/icon4.svg";
import CardIcon2 from "../assets/icons/icon5.svg";
import Frame1 from "../assets/homepage/technical-img.svg";
import Frame2 from "../assets/homepage/recruiter-img.svg";

const Evaluation = () => {
  return (
    <main>
      <section className="px-4">
        <div className="flex md:justify-center">
          <div className="flex items-center gap-2 justify-center lg:w-[19.75rem] bg-[var(--talentmal-color-four)] py-2 px-4 md:px-0 md:p-2 rounded-full">
            <img src={Icon} alt="" className="w-[12px] md:w-[23px]" />
            <p className="text-[14px] md:text-[22px]">
              Our talent selection method
            </p>
          </div>
        </div>

        <div>
          <h1 className="md:text-center text-[32px] md:text-[44px] lg:text-[48px] font-medium lg:font-black text-[var(--talentmal-color-one)] -tracking-[1.5px] lg:-tracking-[2px] leading-[130%] mt-[1rem] lg:mb-[2rem] mb-[1rem]">
            Our Process for Evaluating Talent.
          </h1>
          <p className="md:text-center lg:text-[24px] md:text-[18px] text-[14px] tracking-wide leading-[130%]">
            At TalentMal, we tailor our matching process just for you. It's all
            about flexibility and adaptability, ensuring we find the perfect fit
            that suits your unique needs.
          </p>
        </div>
      </section>

      <section className="my-[3rem] lg:flex items-center justify-center lg:gap-8 space-y-5 lg:space-y-0 bg-[var(--talentmal-color-six)] lg:pt-10 p-5 lg:rounded-[32px]">
        <EvaluationCards
          icon={CardIcon1}
          title="Technical Assessment"
          detail="Candidates’ technical knowledge is assessed on their performance on a string of tasks centered on their preferred programming language Data structure & algorithm proficiency."
          image={Frame1}
        />

        <EvaluationCards
          icon={CardIcon2}
          title="Recruiter Interview"
          detail="Candidates’ technical knowledge is assessed on their performance on a string of tasks centered on their preferred programming language Data structure & algorithm proficiency."
          image={Frame2}
        />
      </section>
    </main>
  );
};

export default Evaluation;
