import Logos from "../src/components/Logos";
import Offer from "../src/components/Offer";
import Evaluation from "../src/components/Evaluation";
import AboutUs from "../src/components/AboutUs";
import Community from "../src/components/Community";
import FAQ from "../src/components/FAQ";
// import Friends from "../src/components/Friends";
import DiamondIcon from "../src/assets/homepage/diamond.svg";
import PeopleIcon from "../src/assets/homepage/people-icon.svg";
import FrameOne from "../src/assets/homepage/Frame1.svg";
import FrameTwo from "../src/assets/homepage/Frame2.svg";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <section className="md:flex md:items-center w-full mt-10 px-4">
        <div className="md:w-3/5">
          <p className="text-[12px] md:text-[18px] bg-[var(--talentmal-color-four)] w-[15.1rem] md:w-[20rem] tracking-[0.005em] text-center rounded-full py-1">
            Over 3 million ready-to-work creative
          </p>
          <h1 className="hidden md:inline-block mt-7 md:text-[82px] lg:text-[85px] text-[var(--talentmal-color-five)] font-black md:w-[47rem] lg:w-[58.8rem] leading-[110%] -tracking-[5px]">
            Unlocking <br /> Potentials: Connect, <br /> Collaborate, Create
          </h1>
          <h1 className="mt-3 lg:mt-7 md:hidden text-[37px] text-[var(--talentmal-color-five)] font-black leading-[38px] -tracking-[3.2px] w-full">
            Unlocking Potentials: Connect, Collaborate, Create
          </h1>
          <p className="mt-3 lg:mt-7 md:w-[47rem] lg:w-[50rem] lg:text-[22px] text-[14px] md:text-[16px] text-[var(--talentmal-color-one)] leading-[140%] lg:-tracking-[1px]">
            Welcome to TalentMal, where talent meets opportunity. Whether you're
            a forward-thinking employer seeking top-notch freelancers or a
            skilled professional looking for exciting projects, we've got you
            covered.
          </p>
          <button className="mt-6 bg-[var(--talentmal-color-three)] text-white hidden md:flex items-center gap-2 py-3 px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300">
            Join TalentMal
            <img src={DiamondIcon} alt="" className="w-[24px]" />
          </button>

          <div className="mt-3 lg:mt-6 flex flex-col lg:flex-row lg:items-center lg:gap-2">
            <img src={PeopleIcon} alt="" className="w-[78px]" />
            <p className="text-[13px] md:text-[18px] tracking-wide leading-[100%] md:leading-none mt-3 lg:mt-0">
              Join over 10k+ freelancers and recruiters experiencing the power
              of TalentMal
            </p>
          </div>

          <button className="w-full mt-6 bg-[var(--talentmal-color-three)] text-white md:hidden flex items-center justify-center gap-2 py-3 px-7 rounded-full hover:scale-[1.01] active:bg-[#818181] duration-300 text-[14px] md:text-[16px]">
            Join TalentMal
            <img src={DiamondIcon} alt="" className="w-[20px] lg:w-[24px]" />
          </button>
        </div>

        <div className="w-2/5 hidden lg:flex relative">
          <img
            src={FrameOne}
            alt="image-one"
            className="w-[21.5rem] pt-[4rem]"
          />
          <img
            src={FrameTwo}
            alt="image-two"
            className="w-[21.5rem] absolute left-[16.8rem]"
          />
        </div>
      </section>

      <section className="mt-[3rem] lg:mt-[6rem] ">
        <Logos />
      </section>

      <section className="mt-[3rem] lg:mt-[6rem] px-4">
        <Offer />
      </section>

      <section className="mt-[3rem] lg:mt-[6rem]">
        <Evaluation />
      </section>

      <section className="mt-[3rem] lg:mt-[6rem]">
        <AboutUs />
      </section>

      <section className="mt-[3rem] lg:mt-[6rem]">
        <Community />
      </section>

      <div className="container mx-auto px-4">
        <section className="mt-[3rem] lg:mt-[6rem]">
          <FAQ />
        </section>
      </div>

      {/* <section className="mt-[3rem] lg:mt-[6rem] px-2">
        <Friends />
      </section> */}
    </main>
  );
};

export default HomePage;
