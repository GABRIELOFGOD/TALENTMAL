import Logos from "../src/components/Logos";
import Offer from "../src/components/Offer";
import Evaluation from "../src/components/Evaluation";
import AboutUs from "../src/components/AboutUs";
import Community from "../src/components/Community";
import FAQ from "../src/components/FAQ";
import Friends from "../src/components/Friends";
import DiamondIcon from "../src/assets/homepage/diamond.svg";
import PeopleIcon from "../src/assets/homepage/people-icon.svg";
import FrameOne from "../src/assets/homepage/Frame1.svg";
import FrameTwo from "../src/assets/homepage/Frame2.svg";

const HomePage = () => {
  return (
    <main className="container mx-auto py-10">
      <section className="md:flex md:items-center w-full mt-10 px-2">
        <div className="md:w-3/5">
          <p className="text-[12px] bg-[var(--talentmal-color-four)] w-[15.1rem] text-center rounded-full py-1">
            over 3 million ready-to-work creative
          </p>
          <h1 className="hidden md:block lg:text-[82px] text-[var(--talentmal-color-five)] font-black leading-[110%] -tracking-[8px]">
            Unlocking <br /> Potentials: Connect, <br /> Collaborate, Create
          </h1>
          <h1 className="mt-3 lg:mt-7 md:hidden text-[37px] text-[var(--talentmal-color-five)] font-black leading-[38px] -tracking-[3.2px] w-full">
            Unlocking Potentials: Connect, Collaborate, Create
          </h1>
          <p className="mt-3 lg:mt-7 md:w-[49rem] md:text-[22px] text-[14px] text-[var(--talentmal-color-one)] leading-[140%] -tracking-[1px]">
            Welcome to TalentMAL, where talent meets opportunity. Whether you're
            a forward-thinking employer seeking top-notch freelancers or a
            skilled professional looking for exciting projects, we've got you
            covered.
          </p>
          <button className="mt-6 bg-[var(--talentmal-color-three)] text-white hidden md:flex items-center gap-2 py-3 px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300">
            Join TalentMAL
            <img src={DiamondIcon} alt="" className="w-[24px]" />
          </button>

          <div className="mt-3 lg:mt-6 flex flex-col lg:flex-row lg:items-center lg:gap-2">
            <img src={PeopleIcon} alt="" className="w-[78px]" />
            <p className="text-[12px] lg:text-[14px] -tracking-[0.5px] leading-[100%] md:leading-none mt-3 lg:mt-0">
              Join over 10k+ freelancers and recruiters experiencing the power
              of TalentMAL
            </p>
          </div>

          <button className="w-full mt-6 bg-[var(--talentmal-color-three)] text-white md:hidden flex items-center justify-center gap-2 py-3 px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300 text-[14px] md:text-[16px]">
            Join TalentMAL
            <img src={DiamondIcon} alt="" className="w-[20px] lg:w-[24px]" />
          </button>
        </div>

        <div className="w-2/5 hidden lg:flex relative">
          <div>
            <img
              src={FrameOne}
              alt="image-one"
              className="w-[21.5rem] pt-[4rem]"
            />
          </div>
          <div>
            <img
              src={FrameTwo}
              alt="image-two"
              className="w-[21.5rem] absolute left-[16.8rem]"
            />
          </div>
        </div>
      </section>

      <section className="mt-[3rem] w-full lg:mt-[6rem] px-2">
        <Logos />
      </section>

      <section className="mt-[3rem] lg:mt-[6rem] px-2">
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

      <div className="container mx-auto px-2">
        <section className="mt-[3rem] lg:mt-[6rem]">
          <FAQ />
        </section>
      </div>

      <section className="mt-[3rem] lg:mt-[6rem] px-2">
        <Friends />
      </section>
    </main>
  );
};

export default HomePage;
