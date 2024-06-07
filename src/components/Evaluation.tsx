import EvaluationCards from "./EvaluationCards";
import Icon from "../assets/icons/tv.svg";
import CardIcon1 from "../assets/icons/icon4.svg";
import CardIcon2 from "../assets/icons/icon5.svg";
import Frame1 from "../assets/homepage/technical-img.svg";
import Frame2 from "../assets/homepage/recruiter-img.svg";

const Evaluation = () => {
  return (
    <main >
      <section className="w-[63.8rem] mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 justify-center w-[19.75rem] bg-[var(--talentmal-color-four)] p-2 rounded-full">
            <img src={Icon} alt="" className="w-[20px]" />
            <p className="text-[18px]">Our talent selection method</p>
          </div>
        </div>

        <div>
          <h1 className="text-center text-[48px] font-black text-[var(--talentmal-color-one)] -tracking-[3px] leading-[130%] mt-[1rem] mb-[2rem]">
            Our Process for Evaluating Talent.
          </h1>
          <p className="text-center text-[24px] -tracking-[1px] leading-[130%]">
            At TalentMAL, we tailor our matching process just for you. It's all
            about flexibility and adaptability, ensuring we find the perfect fit
            that suits your unique needs.
          </p>
        </div>
      </section>

      <section className="my-[3rem] flex items-center justify-center gap-8 bg-[var(--talentmal-color-six)] px-28 pt-10 ">
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
