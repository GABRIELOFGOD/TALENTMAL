import EvaluationCards from "./EvaluationCards";
import Icon from "../assets/icons/tv.svg";
import CardIcon1 from "../assets/icons/icon4.svg";
import CardIcon2 from "../assets/icons/icon5.svg";
import Frame1 from "../assets/homepage/technical-img.svg";
import Frame2 from "../assets/homepage/recruiter-img.svg";

const Evaluation = () => {
  return (
    <main>
      <section className="px-2">
        <div className="flex lg:justify-center">
          <div className="flex items-center gap-1 justify-center lg:w-[19.75rem] bg-[var(--talentmal-color-four)] py-2 px-4 lg:px-0 lg:py-0 lg:p-2 p-0 rounded-full">
            <img src={Icon} alt="" className="w-[12px] lg:w-[20px]" />
            <p className="text-[9px] lg:text-[18px]">
              Our talent selection method
            </p>
          </div>
        </div>

        <div>
          <h1 className="lg:text-center text-[32px] lg:text-[48px] font-medium lg:font-black text-[var(--talentmal-color-one)] -tracking-[3px] leading-[130%] mt-[1rem] lg:mb-[2rem] mb-[1rem]">
            Our Process for Evaluating Talent.
          </h1>
          <p className="lg:text-center lg:text-[24px] text-[14px] -tracking-[1px] leading-[130%]">
            At TalentMAL, we tailor our matching process just for you. It's all
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
